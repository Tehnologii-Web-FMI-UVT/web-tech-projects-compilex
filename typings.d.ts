interface Message {
    text: string;
    createdAt: admin.firestone.Timestamp;
    user:	 {
                _id: string;
                name: string;
                avatar: string;
	};
}