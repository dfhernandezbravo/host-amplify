import dynamic from "next/dynamic";

const RemoteCart = dynamic(() => import("cart/cart"), {
  ssr: false,
  loading: () => (
    <p style={{ height: "80px", width: "100vw" }}>Loading cart...</p>
  ),
});

export default function Cart() {
  return <RemoteCart />;
}
