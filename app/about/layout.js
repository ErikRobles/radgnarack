export const metadata = {
    title: 'Radgnarack | About',
    description: 'Radgnarack highest quality adventure racks. Our goal is to make it easy and convenient for people to transport their equipment to their favorite outdoor destinations.',
  }

export default function AboutLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {children}
      </section>
    )
  }