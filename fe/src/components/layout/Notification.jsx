import { useState, useEffect } from "react";
import { Tabs, List, Avatar, Empty } from "antd";
import { getNotification } from "../../util/api";
import dayjs from "dayjs";

const { TabPane } = Tabs;

const Notification = ({ notifications }) => {
  console.log(notifications);
  
  const [allNotification, setAllNotification] = useState([]);

  useEffect(() => {
    const fetchNotification = async () => {
      const res = await getNotification();
      if (res) setAllNotification(res);
    };
    fetchNotification();
  }, [notifications]);

  const renderList = (data) => {
    if (!data || data.length === 0) {
      return <Empty description="Không có thông báo mới" />;
    }
    return (
      <List
        itemLayout="horizontal"
        dataSource={data.slice(0, 5)}
        renderItem={(noti) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={
                    noti.senderId.profilePic
                      ? noti.senderId.profilePic
                      : "../../src/assets/images/avatar/no-image.png"
                  }
                />
              }
              title={<strong>{noti.senderId.name}</strong>}
              description={
                <>
                  <div>{noti.text}</div>
                  <div style={{ fontSize: "12px", color: "#999" }}>
                    {dayjs(noti.createdAt).format("DD/MM/YYYY HH:mm")}
                  </div>
                </>
              }
            />
          </List.Item>
        )}
      />
    );
  };

  return (
    <Tabs defaultActiveKey="all" centered>
      <TabPane tab="Chưa đọc" key="unread" className="p-3">
        {renderList([...notifications].reverse())}
      </TabPane>
      <TabPane tab="Tất cả" key="all" className="p-3">
        {renderList(allNotification)}
      </TabPane>
    </Tabs>
  );
};

export default Notification;