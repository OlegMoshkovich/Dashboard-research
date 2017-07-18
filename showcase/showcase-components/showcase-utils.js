import React from 'react';

export function mapSection(section) {
  const SectionComponent = section.component;
  return (
    <section >
      <h3>{section.name}</h3>
      <SectionComponent />
    </section>
  );
}
