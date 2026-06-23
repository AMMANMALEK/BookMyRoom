import React from 'react'
import Title from '../components/Title'

const team = [
    {
        name: "Aaliya Malek",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        bio: "Passionate traveler turned entrepreneur. Aaliya founded BookMyRoom to make luxury stays accessible to everyone."
    },
    {
        name: "Amman Malek",
        role: "Head of Product",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        bio: "Amman leads the product vision, ensuring every feature serves both travelers and hotel partners equally well."
    },
    {
        name: "Priya Bharti",
        role: "Head of Partnerships",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
        bio: "Priya builds and nurtures relationships with hotels worldwide, curating only the finest properties on the platform."
    },
]

const values = [
    { title: "Transparency", description: "No hidden fees, no surprises. What you see is exactly what you pay." },
    { title: "Trust", description: "Every review is from a verified guest. Every property is quality-checked." },
    { title: "Simplicity", description: "We obsess over making booking as easy as possible, every single step." },
    { title: "Inclusivity", description: "Great stays shouldn't be exclusive. We cater to every budget and travel style." },
]

const About = () => {
    return (
        <div className='pt-28'>

            {/* Hero */}
            <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-gradient-to-br from-slate-50 to-blue-50'>
                <Title
                    align="center"
                    title="About BookMyRoom"
                    subTitle="We're on a mission to make every journey extraordinary — one booking at a time."
                />
            </div>

            {/* Story */}
            <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-20'>
                <div className='max-w-3xl mx-auto text-center'>
                    <h2 className='font-playfair text-3xl font-bold text-gray-800 mb-6'>Our Story</h2>
                    <p className='text-gray-500 leading-relaxed mb-4'>
                        BookMyRoom was born out of frustration. Too many booking platforms were cluttered, confusing, and full of hidden costs. We set out to build something better — a platform where finding and booking the perfect room feels as good as the stay itself.
                    </p>
                    <p className='text-gray-500 leading-relaxed mb-4'>
                        Launched in 2024, we've grown from a small idea to a platform trusted by thousands of travelers across 50+ cities. We work directly with hotel owners to ensure quality, fairness, and accuracy — no middlemen, no inflated prices.
                    </p>
                    <p className='text-gray-500 leading-relaxed'>
                        Whether you're planning a weekend escape, a business trip, or a dream vacation, BookMyRoom is your trusted companion from search to check-out.
                    </p>
                </div>
            </div>

            {/* Values */}
            <div className='bg-slate-50 px-6 md:px-16 lg:px-24 xl:px-32 py-20'>
                <Title
                    align="center"
                    title="What We Stand For"
                    subTitle="Our values shape every decision we make."
                />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14'>
                    {values.map((v, i) => (
                        <div key={i} className='bg-white rounded-2xl p-6 shadow-sm text-center'>
                            <div className='w-10 h-10 bg-black rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-sm'>{i + 1}</div>
                            <h3 className='font-playfair text-lg font-semibold text-gray-800 mb-2'>{v.title}</h3>
                            <p className='text-gray-500 text-sm leading-relaxed'>{v.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team */}
            <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-20'>
                <Title
                    align="center"
                    title="Meet the Team"
                    subTitle="The people behind the platform."
                />
                <div className='flex flex-wrap justify-center gap-10 mt-14'>
                    {team.map((member, i) => (
                        <div key={i} className='text-center max-w-xs'>
                            <img
                                src={member.image}
                                alt={member.name}
                                className='w-24 h-24 rounded-full mx-auto object-cover shadow-md'
                            />
                            <h3 className='font-playfair text-xl font-semibold mt-4'>{member.name}</h3>
                            <p className='text-blue-500 text-sm mb-2'>{member.role}</p>
                            <p className='text-gray-500 text-sm leading-relaxed'>{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className='bg-black text-white px-6 md:px-16 lg:px-24 xl:px-32 py-20 text-center'>
                <h2 className='font-playfair text-3xl md:text-4xl font-bold'>Want to list your hotel with us?</h2>
                <p className='text-gray-400 mt-4 max-w-xl mx-auto'>Join hundreds of hotel owners who trust BookMyRoom to connect them with quality guests.</p>
                <a href='/' className='inline-block mt-8 bg-white text-black px-10 py-3 rounded-full text-sm hover:bg-gray-100 transition-colors'>Get Started</a>
            </div>

        </div>
    )
}

export default About
