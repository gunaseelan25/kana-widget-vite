import { KanaWidget, WidgetConfig } from "@kanalabs/kana-widget";
export const WidgetPage = () => {
  const widgetConfig: WidgetConfig = {
  // Required: The unique SDK key provided by the developer. This key is essential for the widget to function properly.
  // If you haven't received a key yet, please contact the development team to obtain one.
  sdkKey: "Your dApp/company SDK key",

  };
  return (
    <KanaWidget config={widgetConfig} />
  );
};