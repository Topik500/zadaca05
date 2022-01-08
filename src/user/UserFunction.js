import React from 'react';

export default function UserFunction({ name, years, onButtonClick }) {
  return (
    <div>
    <p>
      Pozdrav, moje ime je {name} i imam {years} godina.
    </p>
    </div>
  );
}
