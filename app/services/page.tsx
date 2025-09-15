"use client";
import Link from "next/link";

const services = [
	{
		title: "Construction & Renovation",
		points: [
			"Ceiling & steel work, carpentry",
			"Aluminum & glass installations",
			"Interior fit-outs, civil works",
		],
	},
	{
		title: "Building Maintenance",
		points: [
			"AC/HVAC installation & maintenance",
			"Electrical services & wiring",
			"Lift/elevator upkeep, water filtration/RO",
		],
	},
	{
		title: "Security & IT",
		points: [
			"CCTV & access control systems",
			"IT networking, servers & support",
			"Telecom & fire alarm systems",
		],
	},
	{
		title: "Allied & General Supplies",
		points: [
			"Furniture & fixtures",
			"General order supplies, import/export",
		],
	},
	{
		title: "Solar Supplies",
		points: [
			"Solar panels and accessories",
			"Battery storage solutions",
			"Installation and maintenance",
		],
	},
	{
		title: "HVAC Services",
		points: [
			"Air conditioning systems",
			"Heating solutions",
			"Ventilation and maintenance",
		],
	},
];

export default function ServicesPage() {
	return (
		<div className="font-sans text-gray-900">
			<section className="py-16 bg-gray-50">
        <div className="container-balanced">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="subtle max-w-3xl">
            A complete suite of services to build, operate, and maintain your spaces.
            Tailored SLAs and on-demand teams available nationwide.
          </p>
        </div>
      </section>
			<section className="py-16">
				<div className="container-balanced grid md:grid-cols-3 gap-6">
					{services.map((s) =>
						s.title === "Construction & Renovation" ? (
							<Link
								href="/services/construction"
								key={s.title}
								className="card hover:shadow-lg transition-shadow block"
							>
								<h3 className="text-xl font-semibold mb-3">{s.title}</h3>
								<ul className="list-disc pl-5 subtle space-y-1">
									{s.points.map((p) => (
										<li key={p}>{p}</li>
									))}
								</ul>
							</Link>
						):s.title === "Building Maintenance" ? (
							<Link
								href="/services/maintenance"
								key={s.title}
								className="card hover:shadow-lg transition-shadow block"
							>
								<h3 className="text-xl font-semibold mb-3">{s.title}</h3>
								<ul className="list-disc pl-5 subtle space-y-1">
									{s.points.map((p) => (
										<li key={p}>{p}</li>
									))}
								</ul>
							</Link>
						)
						:s.title === "Security & IT" ? (
							<Link
								href="/services/It"
								key={s.title}
								className="card hover:shadow-lg transition-shadow block"
							>
								<h3 className="text-xl font-semibold mb-3">{s.title}</h3>
								<ul className="list-disc pl-5 subtle space-y-1">
									{s.points.map((p) => (
										<li key={p}>{p}</li>
									))}
								</ul>
							</Link>
						)
						:s.title === "Allied & General Supplies" ? (
							<Link
								href="/services/allied"
								key={s.title}
								className="card hover:shadow-lg transition-shadow block"
							>
								<h3 className="text-xl font-semibold mb-3">{s.title}</h3>
								<ul className="list-disc pl-5 subtle space-y-1">
									{s.points.map((p) => (
										<li key={p}>{p}</li>
									))}
								</ul>
							</Link>
						) : s.title === "Solar Supplies" ? (
							<Link
								href="/services/solar-supplies"
								key={s.title}
								className="card hover:shadow-lg transition-shadow block"
							>
								<h3 className="text-xl font-semibold mb-3">{s.title}</h3>
								<ul className="list-disc pl-5 subtle space-y-1">
									{s.points.map((p) => (
										<li key={p}>{p}</li>
									))}
								</ul>
							</Link>
						) : s.title === "HVAC Services" ? (
							<Link
								href="/services/hvac"
								key={s.title}
								className="card hover:shadow-lg transition-shadow block"
							>
								<h3 className="text-xl font-semibold mb-3">{s.title}</h3>
								<ul className="list-disc pl-5 subtle space-y-1">
									{s.points.map((p) => (
										<li key={p}>{p}</li>
									))}
								</ul>
							</Link>
						) : null
					)}
				</div>
			</section>
		</div>
	);
}
