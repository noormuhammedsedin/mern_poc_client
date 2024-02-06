import React, { useState, useEffect } from "react";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import { useNavigate,Link} from "react-router-dom";

const Store = ( {title,imageUrl,bookPdfUrl}) => {
  const [clientToken, setClientToken] = useState(null);
  const [instance, setInstance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([{title:title,imageUrl:imageUrl,bookPdfUrl:bookPdfUrl,price:10}]);
  const[status,setStatus]=useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClientToken = async () => {
      try {
        const response = await fetch("https://mern-juctvtvto-noormuhammedsedins-projects.vercel.app/payment");
        const clientToken = await response.json();
        setClientToken(clientToken);
      } catch (error) {
        console.error("Error fetching client token:", error);
      }
    };

    fetchClientToken();
  }, []);

  const buy = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const response = await axios.post("https://mern-juctvtvto-noormuhammedsedins-projects.vercel.app/payment",{ nonce,cart});
      setStatus(true)
      setLoading(false);
      // navigate("/");
  
    } catch (error) {
      console.error("Error processing payment:", error);
      // Handle error, add console logs if needed
    }
  };
  
  

  if (!clientToken) {
    return <div><h1>Loading...</h1></div>;
  }

  return (
    <div>
      <DropIn
        options={{
          authorization: clientToken.clientToken,
          // paypal: { flow: "vault" }
        }}
        onInstance={(inst) => setInstance(inst)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={buy}
        disabled={!instance}
      >
        {loading ? "Processing..." : "Buy Now"}
      </button>
      {status && <p className='font-semibold'>download book <Link to={"https://drive.google.com/file/d/1UyD_W2wm1Oglyo023R38OBqPO5pdJ4LU/view?usp=sharing"}  target="_blank" className='text-blue-600'>click here.</Link></p>}
    </div>
  );
};

export default Store;
