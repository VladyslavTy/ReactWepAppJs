import  React from "react";
import  hotelImg from  "./hotel.jpg";

class HomePage extends React.Component{
    render(){
        return <div className="homePage">
            <h1>
                Hotel Marriot
            </h1>
            <div className="homepageContent">
            <img src={hotelImg} width="500px" height="500px" className="imgHome"/>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maxime nihil nulla quasi tenetur. Ad delectus ipsa laboriosam, mollitia perspiciatis quibusdam quisquam voluptatem voluptatum! Dicta exercitationem laudantium officia rem veniam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi cum doloremque doloribus eligendi inventore, ipsam, libero natus neque nostrum officia placeat possimus quas quia reiciendis saepe similique velit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid eaque eligendi exercitationem maiores? Ab aliquid architecto asperiores consequatur dolore enim id laborum nihil quia, quod sapiente tempora, ut vel.</p>
                </div>
            </div>
        </div>
    }
}

export default HomePage;