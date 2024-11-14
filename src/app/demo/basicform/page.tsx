import dynamic from "next/dynamic";
const BasicFormComponent = dynamic(
  () => import("@/app/_components/demo/BasicForm"),
);

export default function Survey() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <BasicFormComponent />
    </div>
  );
}
