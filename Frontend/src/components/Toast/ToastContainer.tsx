interface ToastContainerProps {
  children: React.ReactNode;
}

export function ToastContainer({ children }: ToastContainerProps) {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {children}
    </div>
  );
}
