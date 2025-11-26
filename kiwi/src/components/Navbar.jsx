export default function Navbar() {
    return (
        <nav className="bg-[#502d08] text-[white] flex justify-between h-14 items-center mt-7 mr-4 ml-4 mb-2 p-6 rounded-lg ">
        {/* rounded is basically border radius, mt is margin top, h is height, p is padding baachon se kuch karwana ho toh tell parent*/}
            <div className="flex gap-4 items-center font-semibold p-2 ">
                {/*gap is space between items, flex aligns verticle to a horizontal line */}
                <p>home</p>
                <p>contact us</p>
                <p>about</p>
            
            </div>
            <div className="font-bold">
                <p>logo</p>
            </div>
                
            <div className="h-fit w-fit text-center p-1 border-2 rounded-full font-semibold pl-4 pr-4">
                {/* p is padding, pl is padding left, pr is padding right */}
                <button>order now</button>
            </div>
            
            </nav>
    )
}