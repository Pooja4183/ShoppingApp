export const openRazorpayCheckout = ({
    key,
    razorpayOrderId,
    amount,
    user,
    orderId
}) =>{

    if(!window.Razorpay){
        alert("Razorpay SDK not loaded");
        return;
    }

    const options = {
        key,
        amount,
        currency:"INR",
        name:"Shopping app",
        description:"order payment",
        order_id:razorpayOrderId,

        handler: function(response){
            console.log("Payment UI completed", response);
             // UI feedback only — NOT verification
            window.location.href=`/order-success/${orderId}`;


        },

        prefill:{
            name:user?.name,
            email:user?.email,
            contact:user?.mobile,
        },

        theme:{
            color:"#000000"
        },
    };
console.log("✅ Razorpay SDK detected:", window.Razorpay);
console.log("✅ Razorpay options:", {
  key,
  razorpayOrderId,
  amount,
  user,
});
    const razorpay = new window.Razorpay(options);
    razorpay.open();
}