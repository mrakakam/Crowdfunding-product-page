

export const About = ()=>{

    return(

        <>
        
            <section>

                {/* first divof this section */}

                <div>

                    <h2>About this project</h2>

                    <p>
                        The Mastercraft Bamboo Monitor Riser is a sturdy platform that elevates <br /> 
                        your screen to a more comfortable viewing height. Placing your monitor at eye level has <br />
                        the potential to improve your posture and make comfortable while at work, <br />
                        helping you stay focused on the task at hand.
                    </p>

                    <p>
                        Featuring artisan craftmanship, the simplicity of design creates extra desk space below <br /> 
                        your computers to allow notepads , pens, and USB sticks to be stored under the stand.
                    </p>

                </div>


                {/* second div called " bamboo-stand " */}

                <div>

                    <div>

                        <h2>Bamboo Stands</h2>
                        <p className="text-[#008b8b]">Pledge $25 or more</p>

                    </div>

                    <p>
                        You get ergonomic stand made of natural bamboo you've helped us launch <br />
                        our promotional campaign, and you'll be added to a special Backer member list.
                    </p>

                    <div>

                        <span> <h1>101</h1> <p>left</p> </span>

                        <button className="bg-[#008b8b] text-white">Select Reward</button>

                    </div>

                    
                </div>


                {/* third div called " black-edition " */}

                 <div>

                    <div>

                        <h2>Black Edition Stands</h2>

                        <p className="text-[#008b8b]">Pledge $75 or more</p>

                    </div>

                    <p>
                        You get Black Special Edition computer stand and a personal thank you. You'll <br /> 
                        be added to our Backer member list. Shipping is included.
                    </p>

                    <div>
                        <span> <h1>4</h1> <p>left</p> </span>

                        <button className="bg-[#008b8b] text-white">Select Reward</button>
                    </div>

                    
                </div>

                {/* fourth div called " mahogany-edition " */}


                 <div>

                    <div>

                        <h2>Mahogany Special Edition</h2>

                        <p className="text-[#008b8b]">Pledge $200 or more</p>

                    </div>

                    <p>
                        You get two Special Edition Mahogany stands , a Backer T-shirt, and a personal <br />
                        thank you. You'll be added to our Backer member list. Shipping is included.
                    </p>

                    <div>

                        <span> <h1>0</h1> <p>left</p> </span>

                        <button className="bg-gray-700 text-white">Out of stock</button>

                    </div>

                    
                </div>




            </section>
        
        </>
    )
}