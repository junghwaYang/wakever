import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))} */}

              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>우왁굳</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>우왁굳</SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>왁타버스 WAKTAVERSE</SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>왁타버스 ZERO</SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>우왁굳의 종합게임</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>주르르</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>주르르</SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>봉인 풀린 주르르</SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>주르르 다시보기</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>고세구</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>고세구</SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>고세구의 좀더</SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>밥친구 고세구</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>릴파</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>릴파</SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>릴파의 순간들</SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>릴파의 종합게임</SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>LILPA ARCHIVE [ISEGYE IDOL]</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>징버거</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>징버거</SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>징버거가 ZZANG센 주제에 너무 신중하다</SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>징버거의 무한 츠쿠요미</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>아이네</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>아이네</SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>데친 숙주나물</SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>아이네 다시보기</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>비챤</SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>비챤</SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>비챤의 나랑놀아</SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>비챤의 무릉도원</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
