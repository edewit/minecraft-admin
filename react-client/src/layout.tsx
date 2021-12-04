import {
  Brand,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  Page,
  PageHeader,
  PageHeaderTools,
  PageHeaderToolsGroup,
  PageHeaderToolsItem,
  PageSection,
  PageSectionVariants,
  PageSidebar,
} from "@patternfly/react-core";
import React, { FunctionComponent, ReactNode, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "./assets/logo/logo.png";
import _ from "lodash";

import style from "./layout.module.scss";

interface LayoutProps {
  children: ReactNode;
  pageNav: ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = (props) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const userDropdownItems = [
    <DropdownItem key="1">Logout</DropdownItem>,
    <DropdownItem key="2">Manage Account</DropdownItem>,
  ];
  const PageToolbar = (
    <PageHeaderTools>
      <PageHeaderToolsGroup>
        <PageHeaderToolsItem>
          <Dropdown
            isPlain
            position="right"
            onSelect={() => setIsUserDropdownOpen((prev) => !prev)}
            isOpen={isUserDropdownOpen}
            toggle={
              <DropdownToggle
                onToggle={(val: boolean) => setIsUserDropdownOpen(val)}
              >
                Your minecraft name
              </DropdownToggle>
            }
            dropdownItems={userDropdownItems}
          />
        </PageHeaderToolsItem>
      </PageHeaderToolsGroup>
    </PageHeaderTools>
  );

  const Header = (
    <PageHeader
      logo={<Brand src={logo} alt="learn.study" className={style.brand} />}
      logoProps={{ href: "/" }}
      headerTools={PageToolbar}
      className={style.header}
    />
  );

  const Sidebar = (
    <PageSidebar nav={props.pageNav} theme="dark" className={style.sidebar} />
  );

  return (
    <Router>
      <Page header={Header} sidebar={Sidebar} className={style.page}>
        <PageSection variant={PageSectionVariants.light}>
          {props.children}
        </PageSection>
      </Page>
    </Router>
  );
};
