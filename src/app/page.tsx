import { ButtonArray } from "@/components/layout/button-array";
import { FixBottom } from "@/components/layout/fix-bottom";
import { FixTop } from "@/components/layout/fix-top";
import { InstallPrompt } from "@/components/install-prompt";
import { NavigationBar } from "@/components/navigation-bar";
import { NewCheckButton } from "@/components/buttons/new-check";
import { ResultsTable } from "@/components/tables/results";
import { SafeAreaContentWrapper } from "@/components/layout/safe-area-content-wrapper";

export default function Home() {
  return (
    <>
      <FixTop>
        <NavigationBar title="SepsisCheck" subtitle="v0.0.1" />
      </FixTop>

      <SafeAreaContentWrapper paddingTop="60px" paddingBottom="64px">
        <InstallPrompt />
        <ResultsTable className="py-4" />
      </SafeAreaContentWrapper>

      <FixBottom>
        <ButtonArray>
          <NewCheckButton resetAndStartNewOption />
        </ButtonArray>
      </FixBottom>
    </>
  );
}
