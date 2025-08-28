import DemoTradingBanner from "./Component/DemotradingBanner"
import CommissionFreeSection from "./Component/Hero"
import CFDTradingHero from "./Component/Hero2"
import HowItWorks from "./Component/HowitWorks"
import TradingInstruments from "./Component/iconebar"
import MetaTraderShowcase from "./Component/Metatrader"
import AdmiralsHeader from "./Component/Navbar"
import TradingConditions from "./Component/TradingCondition"
import WhyChooseAdmirals from "./Component/Whchoose"

import AdmiralsFooter from "./Component/Footer1"
import GetInTouchSection from "./Component/GetinTouch"
import AdmiralsDisclaimerFooter from "./Component/Footer2"
import LiveChatButton from "./Component/LivechatComponent"
import ScrollButton from "./Component/ScrollButton"


function App() {


  return (
    <>
    <AdmiralsHeader></AdmiralsHeader>
    <CommissionFreeSection></CommissionFreeSection>
    <CFDTradingHero></CFDTradingHero>
    <TradingInstruments></TradingInstruments>
    <HowItWorks></HowItWorks>
    <MetaTraderShowcase></MetaTraderShowcase>
    <TradingConditions></TradingConditions>
    <WhyChooseAdmirals></WhyChooseAdmirals>
   <DemoTradingBanner></DemoTradingBanner>
   <GetInTouchSection></GetInTouchSection>
   <AdmiralsFooter></AdmiralsFooter>
   <AdmiralsDisclaimerFooter></AdmiralsDisclaimerFooter>
   <LiveChatButton></LiveChatButton>
   <ScrollButton></ScrollButton>
    </>
  )
}

export default App
