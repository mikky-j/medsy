import OrderStepsCarousel from "./OrderSteps/OrderStepsCarousel";
import Steps from "./OrderSteps/Steps";

const OrderSteps = () => {
  return (
    <div>
      <OrderStepsCarousel />
      <div className="my-4 px-8 py-10 justify-center border rounded-sm grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6">
        <Steps
          bgColor="bg-amber-200"
          textColor="text-amber-600"
          description="Add your Products to cart, enter your details and confirm"
          title="Your order"
          index={1}
        />
        <Steps
          bgColor="bg-sky-200"
          textColor="text-sky-600"
          index={2}
          title="Picking your order"
          description="Your order is being picked and now will be forwarded for packaging."
        />
        <Steps
          index={3}
          bgColor="bg-green-200"
          textColor="text-green-600"
          title="Packing Your Order"
          description="We are packing your order and will be out for delivery soon."
        />
        <Steps
          bgColor="bg-violet-200"
          textColor="text-violet-600"
          index={4}
          title="Deliver"
          description="Your order has been prepared and out for delivery. It will be delivered soon."
        />
      </div>
    </div>
  );
};

export default OrderSteps;
