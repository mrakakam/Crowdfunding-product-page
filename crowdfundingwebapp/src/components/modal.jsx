import checkimg from '../assets/images/icon-check.svg';
import closeimg from "../assets/images/icon-close-menu.svg";

export const Modal = () => {

    return (
        
        
        <>
        
            <section>


                <img src={closeimg} alt="Close" />


                <div>

                    <h2>Back to this project</h2>

                    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

                </div>


                <div>

                    <label htmlFor="">

                        <input type="radio" name="pledge" id="" />

                        <div>

                            <h3>Pledge with no reward</h3>

                            <p> Choose to support us without a reward if you simply believe in our project. As a <br/> 
                                backer, you will be signed up to receive product updates via email 
                            </p>


                        </div>

                    </label>


                    <label htmlFor="">


                        <input type="radio" name="bamboo-stand" id="" />

                        <div>

                            <span>

                                <h3>Bamboo Stand</h3>

                                <p>Pledge $25 or more</p>

                            </span>

                            <span>

                                <h3>101</h3>

                                <p>left</p>

                            </span>

                            <p>
                                You get an ergonomic stand made of natural bamboo. You've helped us launch <br/> 
                                 our promotional campaign, and you'll be added to a special Backer member list.
                            </p>


                            <div>

                                <p>Enter your pledge</p>

                                <div>

                                    <input type="button" value="Continue" placeholder='$25' />

                                    <button>Continue</button>

                                </div>

                            </div>


                        </div>


                    </label>


                    <label htmlFor="">


                        <input type="radio" name="Black-Edition" id="" />

                        <div>

                            <span>

                                <h3>Black Edition Stand</h3>

                                <p>Pledge $75 or more</p>

                            </span>

                            <span>

                                <h3>64</h3>

                                <p>left</p>

                            </span>

                            <p>
                                You get a Black Special Edition computer stand and a personal thank you. <br/>  
                                You'll be added to our Backer member list. Shipping is included.
                            </p>


                            <div>

                                <p>Enter your pledge</p>

                                <div>

                                    <input type="button" value="Continue" placeholder='$75' />

                                    <button>Continue</button>

                                </div>

                            </div>


                        </div>


                    </label>


                    <label htmlFor="">


                        <input type="radio" name="Mahogany" id="" />

                        <div>

                            <span>

                                <h3>Mahogany Special Edition</h3>

                                <p>Pledge $200 or more</p>

                            </span>

                            <span>

                                <h3>0</h3>

                                <p>left</p>

                            </span>

                            <p>
                                You get two Special Edition Mahogany stands, a Backer T-shirt and a personal <br/>  
                                thank you. You'll be added to our Backer member list. Shipping is included
                            </p>


                            <div>

                                <p>Enter your pledge</p>

                                <div>

                                    <input type="button" value="Continue" placeholder='$200' />

                                    <button>Continue</button>

                                </div>

                            </div>


                        </div>


                    </label>

                </div>

            </section>
        
        </>
    )
}