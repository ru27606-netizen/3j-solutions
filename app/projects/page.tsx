
export const metadata = { title: "Projects — 3J Solutions Pakistan" };

const projects = [
  { name: "Corporate Office Fit-out", category: "Interior / Civil", summary: "Full turnkey interior including MEP and joinery.", href: "#" },
  { name: "Retail Branch Upgrades", category: "Electrical / HVAC", summary: "Energy-efficient retrofits and preventive maintenance.", href: "#" },
  { name: "Campus Renovation", category: "Construction", summary: "Multi-building renovation with safety compliance.", href: "#" },
  { name: "Data Hall Expansion", category: "IT / Security", summary: "Structured cabling, racks, access control, CCTV.", href: "#" },
  { name: "Residential Tower FM", category: "Facility Management", summary: "24/7 FM with SLA reporting and audits.", href: "#" },
  { name: "Solar Deployment", category: "Allied Services", summary: "Procurement & installation with monitoring.", href: "#" }
];

import ProjectImageSlider from '../../components/ProjectImageSlider';
import HappyClients from '../../components/HappyClients';

export default function ProjectsPage() {
  return (
    <div className="font-sans text-gray-900">
      <section className="py-16 bg-primary text-gray-200">
        <div className="container-balanced">
          <h1 className="text-4xl font-bold mb-6">Projects</h1>
          <p className="max-w-3xl text-white">
            At 3J Solutions Pakistan, our projects showcase a diverse portfolio spanning corporate offices, retail environments, educational institutions, residential complexes, and specialized facility management. Each engagement reflects our commitment to quality, innovation, and sustainable practices, delivering turnkey solutions that integrate interior design, electrical systems, IT infrastructure, and allied services. Explore our curated selection to witness how we transform spaces with precision, efficiency, and a client-focused approach.
          </p>
        </div>
      </section>

      {/* Project Image Slider Section */}
      <section className="py-8">
        <div className="container-balanced">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Projects Gallery</h2>
          <ProjectImageSlider />
        </div>
      </section>

      <section className="py-16">
        <div className="container-balanced grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.name} href={p.href} className="card block">
              <div className="text-xs uppercase tracking-wide text-gray-500">{p.category}</div>
              <h3 className="text-xl font-semibold mt-1">{p.name}</h3>
              <p className="subtle mt-2">{p.summary}</p>
              <div className="mt-4 text-blue-700 font-semibold">View details →</div>
            </a>
          ))}
        </div>
      </section>

      {/* Happy Clients Section */}
      <HappyClients />
    </div>
  );
}
