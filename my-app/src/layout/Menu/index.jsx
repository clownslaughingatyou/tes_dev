import { Menu as AntdMenu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
export default function Menu() {
  const navigate = useNavigate(); //编程式导航
  const handleClick = (info) => {
    navigate(info.key); // 点击菜单项时，导航到对应的页面
  };
  const menuItems = [
    {
      key: "/home",
      label: "Home",
      icon: <AppstoreOutlined />,
    },
    {
      key: "/about",
      label: "About",
      icon: <AppstoreOutlined />,
    },
  ];
  return (
    <AntdMenu
      onClick={handleClick}
      style={{ height: "100vh" }}
      items={menuItems}
      defaultSelectedKeys={["1"]}
      theme="dark"
      mode="inline"
    />
  );
}
