import Image from 'next/image';

const clients = [
  { name: 'Soneri Bank', logo: '/Soneri-Bank-1.png' },
  { name: 'Systems', logo: '/System-Limited-1.jpg' },
  { name: 'Kayseria', logo: '/u44.png' },
  { name: 'Tapal', logo: '/Tapal-Pakistan-1.png' },
  { name: 'fedex', logo: '/fedex.png' },
  
  // Add more clients as needed
];

export default function HappyClients() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-balanced text-center">
        <h2 className="text-3xl font-bold mb-10">Our Happy Clients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center justify-center">
          {clients.map((client) => (
            <div key={client.name} className="flex justify-center items-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain"
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
