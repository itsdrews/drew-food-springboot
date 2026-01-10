interface ToastProps {
  children: React.ReactNode;
}

export function Toast({ children }: ToastProps) {
  return (
    <div className="pointer-events-auto w-full max-w-sm rounded-xl bg-white shadow-lg ring-1 ring-black/5">
      {children}
    </div>
  );
}
