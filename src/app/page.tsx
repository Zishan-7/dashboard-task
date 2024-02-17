import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Tasks from "@/components/Tasks";
import AiModels from "@/components/AiModels";
import Bottom from "@/components/Bottom";
import ClockContainer from "@/components/ClockContainer";
import ColorPicker from "@/components/ColorPicker";
import Background from "@/components/Background";

export default function Home() {
  return (
    // <main className="flex min-h-screen py-9 flex-col items-center justify-center bg-[#6466F2]">
    <Background>
      <ColorPicker />
      <section className="bg-black h-[90dvh] w-[85vw] rounded-2xl p-1 shadow-2xl">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={70} maxSize={80}>
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel
                className="p-2"
                defaultSize={20}
                minSize={20}
                maxSize={30}
              >
                <Tasks />
              </ResizablePanel>
              <ResizableHandle className="bg-transparent" />
              <ResizablePanel className="p-2" minSize={50} defaultSize={60}>
                <AiModels />
              </ResizablePanel>
              <ResizableHandle className="bg-transparent" />
              <ResizablePanel className="p-2" minSize={20} defaultSize={20}>
                <ClockContainer />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>

          <ResizableHandle className="bg-transparent" />

          <ResizablePanel
            className="p-2"
            minSize={30}
            defaultSize={30}
            maxSize={40}
          >
            <Bottom />
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>
    </Background>
  );
}
