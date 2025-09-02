import React from 'react'

const Testimonial = () => {
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        What Our Customers Say
      </h1>
      <p className="text-sm md:text-base text-gray-500 mt-4">
        Real experiences from people who rent and list cars on Chalo Car
      </p>

      <div className="flex flex-wrap justify-center gap-5 mt-16 text-left">
        {/* Card 1 */}
        <div className="w-80 flex flex-col items-start border border-gray-200 p-5 rounded-lg bg-white shadow-sm">
          {/* Quote Icon */}
          <svg
            width="44"
            height="40"
            viewBox="0 0 44 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203"
              fill="#2563EB"
            />
          </svg>

          {/* Stars */}
          <div className="flex items-center justify-center mt-3 gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
            ))}
          </div>

          {/* Review Text */}
          <p className="text-sm mt-3 text-gray-500">
            Renting through Chalo Car was super easy. The booking process was smooth,
            and the car was in perfect condition. I’ll definitely use it again!
          </p>

          {/* User Info */}
          <div className="flex items-center gap-3 mt-4">
            <img
              className="h-12 w-12 rounded-full"
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Priya Sharma"
            />
            <div>
              <h2 className="text-lg text-gray-900 font-medium">Priya Sharma</h2>
              <p className="text-sm text-gray-500">Customer from Delhi</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-80 flex flex-col items-start border border-gray-200 p-5 rounded-lg bg-white shadow-sm">
         <svg
            width="44"
            height="40"
            viewBox="0 0 44 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203"
              fill="#2563EB"
            />
          </svg>

          <div className="flex items-center justify-center mt-3 gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none">
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
            ))}
          </div>

          <p className="text-sm mt-3 text-gray-500">
            Listing my car on Chalo Car has been amazing. They handled insurance and
            payments, and I’ve started earning extra income without any hassle.
          </p>

          <div className="flex items-center gap-3 mt-4">
            <img
              className="h-12 w-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/46.jpg"
              alt="Arjun Mehta"
            />
            <div>
              <h2 className="text-lg text-gray-900 font-medium">Arjun Mehta</h2>
              <p className="text-sm text-gray-500">Car Owner, Mumbai</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-80 flex flex-col items-start border border-gray-200 p-5 rounded-lg bg-white shadow-sm">
          <svg
            width="44"
            height="40"
            viewBox="0 0 44 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203"
              fill="#2563EB"
            />
          </svg>

          <div className="flex items-center justify-center mt-3 gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none">
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
            ))}
          </div>

          <p className="text-sm mt-3 text-gray-500">
            Chalo Car gave me the freedom to rent a luxury car for my wedding. The
            service was professional and the driver was very polite. Totally worth it!
          </p>

          <div className="flex items-center gap-3 mt-4">
            <img
              className="h-12 w-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/52.jpg"
              alt="Rohit Verma"
            />
            <div>
              <h2 className="text-lg text-gray-900 font-medium">Rohit Verma</h2>
              <p className="text-sm text-gray-500">Customer from Jaipur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
