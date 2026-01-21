import {INITIATE_PAYMENT,PAYMENT_SUCCESS,PAYMENT_FAILED,RESET_PAYMENT,PAYMENT_COMPLETE} from './payment.types';

export const initiatePayment = (payload)=>({
    type:INITIATE_PAYMENT,
    payload,
});


export const paymentSuccess = (payload)=>({
    type:PAYMENT_SUCCESS,
    payload,
});

export const paymentComplete = (payload)=>({
    type:PAYMENT_COMPLETE,
    payload,
});

export const paymentFailed = (error)=>({
    type:PAYMENT_FAILED,
    payload:error,
});

export const resetPayment = ()=>({
    type:RESET_PAYMENT,
   
});