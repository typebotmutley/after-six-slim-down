import { useState, useEffect } from 'react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 max-w-md mx-auto">
      <p className="text-destructive font-semibold text-center mb-2">
        ⏰ Sua chance de iniciar sem bloqueios expira em{" "}
        <span className="text-lg font-bold">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>{" "}
        min
      </p>
      <p className="text-destructive/80 text-sm text-center">
        A próxima turma pode exigir convite ou fila de espera.
      </p>
    </div>
  );
};