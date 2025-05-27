import React from 'react'

function TeamMember() {
    return (
        <>
            <div className="team-member mt-5 container mx-auto py-16 px-6 md:px-12">
                <h1 className='font-semibold text-2xl text-center'>our Team Members</h1>

                <div className="card lg:shadow rounded-2xl p-5 max-w-sm mt-5">
                    <div className="card-body">

                        <h1 className='font-semibold'>Joni Halder</h1>
                        <p> Role: <span >Frontend Developer</span></p>
                        <p>
                            Crafts intuitive and interactive UI designs.
                            Passionate about creating user-focused digital experiences using React and Tailwind CSS.
                        </p>

                    </div>

                </div>
            </div>

        </>
    )
}

export default TeamMember