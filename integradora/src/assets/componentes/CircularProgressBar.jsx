import React, { useState, useEffect } from 'react';
import './../css/CircularProgressBar.css';
import Swal from 'sweetalert2';

const CircularProgressBar = ({ waterLevel, size = 100 }) => {
  const radius = size / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  // Determina el color según el nivel de agua
  let color;
  if (waterLevel >= 50) {
    color = '#378CE7'; // Verde
  } else if (waterLevel >= 20) {
    color = '#C08B5C'; // Naranja
  } else if (waterLevel >= 14) {
    color = '#A34343'; // Rojo (menos del 20%)
  } else {
    color = '#A34343'; // Rojo (menos del 14%)
    // Muestra una alerta utilizando SweetAlert2 cuando el nivel de agua es inferior al 14%
    Swal.fire({
      icon:'warning',
      iconColor:'#A34343',
      title: "¡Nivel de agua bajo!",
      html: "Considere llenar su tinaco.",
      timer: 1000,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  }

  // Actualiza el offset cuando cambia el nivel de agua
  useEffect(() => {
    const newOffset = circumference - (waterLevel / 100) * circumference;
    setOffset(newOffset);
  }, [waterLevel, circumference]);

  return (
    <svg width={400} height={400} viewBox={`0 0 ${size} ${size}`}>
      {/* Cambia el viewBox para ajustar el tamaño del SVG */}
      <circle
        cx={radius}
        cy={radius}
        r={radius - 5} // Ajusta el radio para evitar que se corte
        fill="transparent"
        stroke="transparent"
        strokeWidth="10"
      />
      <circle
        cx={radius}
        cy={radius}
        r={radius - 5} // Ajusta el radio para evitar que se corte
        fill="transparent"
        stroke={color}
        strokeWidth="10"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        // Agrega una animación de transición
        style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
      />
      <text className='percent' x={radius} y={radius} textAnchor="middle" dominantBaseline="middle" fill={color}>
        {waterLevel}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;
