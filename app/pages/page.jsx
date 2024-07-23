import { InfoBar } from "../Components/info-bar";
import { MainContainer } from "../Components/main-container";
import { NavBar } from "../Components/nav-bar";
import { OptionBar } from "../Components/opt-bar";

export default function Page() {
  return (
    <div>
      <NavBar></NavBar>
      <OptionBar></OptionBar>
      <MainContainer></MainContainer>
      <InfoBar></InfoBar>
    </div>
  );
}
