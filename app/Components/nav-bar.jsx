"use client";
import Image from "next/image";

export function NavBar() {
  //   const [isClient, setIsClient] = useState(false);

  //   useEffect(() => {
  //     setIsClient(true);
  //   }, []);
  return (
    <div className="inline-block">
      <Image
        src="/resources/ECommLogo.png"
        alt="EComm Logo"
        width={100}
        height={100}
      />
      <input></input>
    </div>
  );
}
