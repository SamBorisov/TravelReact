// import React from "react"
// import ReactDOM from "react-dom/client"

var data = [
    {
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
    },
    {
        title: "Busan",
        location: "Korea",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "18 Sep, 2022",
        endDate: "23 Aug, 2023",
        description: "Great place in Korea, must vist 100% go there now. Amazing trees and everything really. Amazing people. Amazing everthing. Fruits are expessive WOW!",
        imageUrl: "https://media.cntraveler.com/photos/6123f6bb7dfe5dff926c7675/16:9/w_2560%2Cc_limit/South%2520Korea_GettyImages-1200320719.jpg"
    },
        {
        title: "The Wall",
        location: "China",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "13 Oct, 2023",
        endDate: "28 May, 2024",
        description: "Great place in China, the wall is super long, took me days to go ober it. Comunist country, weird people but I like them. Very croudy everywhere.",
        imageUrl: "https://www.fda.gov/files/China-GreatWall.jpg"
    },
    {
        title: "Volcano",
        location: "Indonesia",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "16 Jun, 2024",
        endDate: "2 Feb, 2025",
        description: "Very scary and cool place to visit, near the vocano in Indonesia is always warm as people there. Beautiful nature and untouched forests, a lot of lava and amazing memories",
        imageUrl: "https://static.toiimg.com/photo/msid-81535478,width-96,height-65.cms"
    },
    {
        title: "Phang Nga Bay",
        location: "Thailand",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "11 Mar, 2025",
        endDate: "25 Jan, 2026",
        description: "Great Holiday place in Thailand, amazing view and nature, cool trips with boats, friendly people and many more! Don't miss your chance to go there!",
        imageUrl: "https://il.bestattravel.co.uk/Images/Cropped/ASI-208798-LeadThailandPhiPhi-2-ThailandPhiPhi.jpeg"
    }
]

ReactDOM.render(
    <div>
        <App />
    </div>, document.getElementById("root"))



//---------------------------------------------------------------Components---------------------------------------------------------------\\



function App() {
    const places = data.map(x => {
        return (
            <Places
                key={x.title}
                x = {x} />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <section className="places-list">
                {places}
            </section>
        </div>
    )
}





function Places(props) {
    return(
        <div className="all">
        <div className="tigger">
        <img className="img--s" src={props.x.imageUrl}/>
            <div className="kk">
            <span className="span">
                <img className = "locIMG in-span" src="https://png.pngtree.com/png-vector/20190118/ourmid/pngtree-vector-location-icon-png-image_328697.jpg" />
                <h4 className="loc--s in-span">{props.x.location}</h4>
                <a className="href in-span" href={props.x.googleMapsUrl}>Visit on Google Maps</a>
            </span>
            <h2 className="place--s">{props.x.title}</h2>
            <br/>
            <h5>{props.x.startDate} - {props.x.endDate}</h5>
            <p>{props.x.description}</p>
           
            </div>
        
        </div>
         <hr className="hr"/>
         </div>
    )
}

function Navbar(props) {
    return(
        <div className="nav--s">
            <img className="nav--img"  src="https://previews.123rf.com/images/senoldo/senoldo1506/senoldo150600003/41677203-world-globe-icon-fresh-orange-color-with-smooth-shadows-.jpg"/>
            <p className="mytrav--s"> My tips to Asia </p>
        </div>
    )
}



