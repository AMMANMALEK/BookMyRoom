import React from 'react'
import Title from '../components/Title'

const experiences = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5V19a1 1 0 001 1h6v-6h4v6h6a1 1 0 001-1v-8.5M9 21V9m6 12V9M3 10.5L12 3l9 7.5" />
            </svg>
        ),
        title: "Handpicked Properties",
        description: "Every hotel on BookMyRoom is vetted for quality, comfort, and service. We only list properties that meet our high standards."
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5V8.25A2.25 2.25 0 016 6h12a2.25 2.25 0 012.25 2.25v5.25M3.75 13.5h16.5M3.75 13.5v2.25A2.25 2.25 0 006 18h12a2.25 2.25 0 002.25-2.25V13.5M9 10.5h.008v.008H9V10.5zm3 0h.008v.008H12V10.5zm3 0h.008v.008H15V10.5z" />
            </svg>
        ),
        title: "Instant Booking",
        description: "No waiting, no back-and-forth. Book your room in seconds and get an instant confirmation straight to your inbox."
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>
        ),
        title: "Secure Payments",
        description: "Pay with confidence using Stripe's industry-leading payment security. Your financial data is always protected."
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
        title: "24/7 Support",
        description: "Our support team is always on standby. Whether it's a last-minute change or a quick question, we've got you covered."
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
        title: "Prime Locations",
        description: "From city-center stays to serene retreats, discover hotels in the world's most sought-after destinations."
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        ),
        title: "Verified Reviews",
        description: "Real reviews from real guests. Make informed decisions based on authentic experiences from fellow travelers."
    },
]

const stats = [
    { value: "10,000+", label: "Happy Guests" },
    { value: "500+", label: "Hotels Listed" },
    { value: "50+", label: "Cities Covered" },
    { value: "99%", label: "Satisfaction Rate" },
]

const Experience = () => {
    return (
        <div className='pt-28'>
            {/* Hero Section */}
            <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-gradient-to-br from-slate-50 to-blue-50'>
                <Title
                    align="center"
                    title="The BookMyRoom Experience"
                    subTitle="We believe travel should be effortless. From discovery to check-out, every step of your journey with us is designed to be smooth, enjoyable, and memorable."
                />
            </div>

            {/* Stats */}
            <div className='bg-black text-white px-6 md:px-16 lg:px-24 xl:px-32 py-12'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
                    {stats.map((stat, i) => (
                        <div key={i}>
                            <p className='font-playfair text-4xl font-bold text-blue-400'>{stat.value}</p>
                            <p className='mt-2 text-gray-400 text-sm'>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* What Makes Us Different */}
            <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-20'>
                <Title
                    align="center"
                    title="What Sets Us Apart"
                    subTitle="Built for travelers who value their time and comfort."
                />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14'>
                    {experiences.map((item, i) => (
                        <div key={i} className='border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow'>
                            <div className='mb-4'>{item.icon}</div>
                            <h3 className='font-playfair text-xl font-semibold text-gray-800 mb-2'>{item.title}</h3>
                            <p className='text-gray-500 text-sm leading-relaxed'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* How It Works */}
            <div className='bg-slate-50 px-6 md:px-16 lg:px-24 xl:px-32 py-20'>
                <Title
                    align="center"
                    title="How It Works"
                    subTitle="Book your perfect stay in three simple steps."
                />
                <div className='flex flex-col md:flex-row items-start justify-center gap-8 mt-14'>
                    {[
                        { step: "01", title: "Search", desc: "Enter your destination, dates, and number of guests to browse available rooms." },
                        { step: "02", title: "Choose", desc: "Compare rooms by price, amenities, and reviews to find your ideal match." },
                        { step: "03", title: "Book & Go", desc: "Confirm your booking, make a secure payment, and get ready to enjoy your stay." },
                    ].map((item, i) => (
                        <div key={i} className='flex-1 text-center px-4'>
                            <div className='w-16 h-16 rounded-full bg-black text-white flex items-center justify-center font-playfair text-xl font-bold mx-auto'>{item.step}</div>
                            <h3 className='font-playfair text-xl font-semibold mt-4 mb-2'>{item.title}</h3>
                            <p className='text-gray-500 text-sm leading-relaxed'>{item.desc}</p>
                            {i < 2 && <div className='hidden md:block absolute translate-x-full top-8 text-gray-300 text-2xl'>→</div>}
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-20 text-center'>
                <h2 className='font-playfair text-3xl md:text-4xl font-bold text-gray-800'>Ready to experience it yourself?</h2>
                <p className='text-gray-500 mt-4 max-w-xl mx-auto'>Join thousands of happy travelers who book their stays with BookMyRoom every day.</p>
                <a href='/rooms' className='inline-block mt-8 bg-black text-white px-10 py-3 rounded-full text-sm hover:bg-gray-800 transition-colors'>Browse Hotels</a>
            </div>
        </div>
    )
}

export default Experience
