import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { sendBookingRequest } from "@/lib/booking.functions";

export const ROOM_TYPES = [
  "Standard Room",
  "Executive Suite",
  "Family Room",
  "Conference Hall",
  "Ankober Hall (events)",
] as const;

type Prefill = {
  roomType?: string;
  checkIn?: string;
  checkOut?: string;
};

const BookingContext = createContext<(prefill?: Prefill) => void>(() => {});

export function useBooking() {
  return useContext(BookingContext);
}

const inputClass =
  "w-full border border-earth/20 bg-warm-bg p-3 text-sm text-earth placeholder:text-earth/40 focus:border-clay focus:outline-none";
const labelClass = "text-label mb-2 block text-earth/60";

function todayISO(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

export function BookingForm({
  prefill,
  onDone,
}: {
  prefill?: Prefill | undefined;
  onDone?: (() => void) | undefined;
}) {
  const send = useServerFn(sendBookingRequest);
  const [submitting, setSubmitting] = useState(false);
  const [checkIn, setCheckIn] = useState(prefill?.checkIn || todayISO());
  const [checkOut, setCheckOut] = useState(prefill?.checkOut || todayISO(1));
  const [roomType, setRoomType] = useState(prefill?.roomType || ROOM_TYPES[0]);

  useEffect(() => {
    if (prefill?.checkIn) setCheckIn(prefill.checkIn);
    if (prefill?.checkOut) setCheckOut(prefill.checkOut);
    if (prefill?.roomType) setRoomType(prefill.roomType);
  }, [prefill?.checkIn, prefill?.checkOut, prefill?.roomType]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    setSubmitting(true);
    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          roomType,
          checkIn,
          checkOut,
          guests: Number(fd.get("guests") ?? 1),
          message: String(fd.get("message") ?? ""),
        },
      });
      toast.success("Request sent — the front desk will reply by email.");
      form.reset();
      onDone?.();
    } catch (error) {
      const message =
        error instanceof Error && error.message
          ? error.message
          : "Something went wrong. Please call the front desk.";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bf-checkin" className={labelClass}>
            Check In
          </label>
          <input
            id="bf-checkin"
            type="date"
            required
            min={todayISO()}
            value={checkIn}
            onChange={(e) => {
              setCheckIn(e.target.value);
              if (e.target.value >= checkOut) {
                const next = new Date(e.target.value);
                next.setDate(next.getDate() + 1);
                setCheckOut(next.toISOString().slice(0, 10));
              }
            }}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="bf-checkout" className={labelClass}>
            Check Out
          </label>
          <input
            id="bf-checkout"
            type="date"
            required
            min={checkIn}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bf-room" className={labelClass}>
            Room Type
          </label>
          <select
            id="bf-room"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className={inputClass}
          >
            {ROOM_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bf-guests" className={labelClass}>
            Guests
          </label>
          <input
            id="bf-guests"
            name="guests"
            type="number"
            min={1}
            max={20}
            defaultValue={2}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bf-name" className={labelClass}>
            Full Name
          </label>
          <input id="bf-name" name="name" required maxLength={100} placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="bf-email" className={labelClass}>
            Email
          </label>
          <input
            id="bf-email"
            name="email"
            type="email"
            required
            maxLength={255}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="bf-phone" className={labelClass}>
          Phone
        </label>
        <input
          id="bf-phone"
          name="phone"
          type="tel"
          required
          minLength={6}
          maxLength={40}
          placeholder="+251 …"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="bf-message" className={labelClass}>
          Anything else? <span className="text-earth/30">(optional)</span>
        </label>
        <textarea
          id="bf-message"
          name="message"
          rows={3}
          maxLength={1000}
          placeholder="Late arrival, extra bed, airport pickup…"
          className={inputClass}
        />
      </div>

      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
        {submitting ? "Sending…" : "Send Booking Request"}
      </button>
      <p className="text-xs text-earth/50">
        Goes straight to the front desk at zerutechane@gmail.com. We reply to the email you give us.
      </p>
    </form>
  );
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState<Prefill | undefined>(undefined);

  const openBooking = useCallback((next?: Prefill) => {
    setPrefill(next);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const value = useMemo(() => openBooking, [openBooking]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-earth/60 p-4 backdrop-blur-sm sm:items-center"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Book a room at Getva Hotel"
            onClick={(e) => e.stopPropagation()}
            className="my-8 w-full max-w-xl border border-earth/10 bg-white p-6 shadow-2xl sm:p-10"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <div className="mb-4 h-px w-12 bg-clay" />
                <h2 className="text-2xl text-earth">Book a Room</h2>
                <p className="mt-1 text-sm text-earth/60">
                  Pick your dates and room — we'll confirm availability by email.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close booking form"
                className="text-2xl leading-none text-earth/40 transition-colors hover:text-clay"
              >
                ×
              </button>
            </div>
            <BookingForm prefill={prefill} onDone={() => setOpen(false)} />
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}
