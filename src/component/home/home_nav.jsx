import React, { Component } from "react";
import { Form, Input, InputNumber, Button } from "antd";

class HomeNav extends Component {
	state = {};

	render() {
		const onFinish = (values) => {
			console.log(values);
		};

		const layout = {
			labelCol: {
				span: 2,
			},
			wrapperCol: {
				span: 16,
			},
		};
		const validateMessages = {
			required: "${label} is required!",
			types: {
				email: "${label} is not validate email!",
				number: "${label} is not a validate number!",
			},
			number: {
				range: "${label} must be between ${min} and ${max}",
			},
		};

		return (
			<div>
				<h1>Home_Nav</h1>
				<Form
					{...layout}
					name="nest-messages"
					onFinish={onFinish}
					validateMessages={validateMessages}
				>
					<Form.Item
						name={["user", "name"]}
						label="Name"
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name={["user", "email"]}
						label="Email"
						rules={[
							{
								type: "email",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name={["user", "age"]}
						label="Age"
						rules={[
							{
								type: "number",
								min: 0,
								max: 99,
							},
						]}
					>
						<InputNumber />
					</Form.Item>
					<Form.Item name={["user", "website"]} label="Website">
						<Input />
					</Form.Item>
					<Form.Item
						name={["user", "introduction"]}
						label="Introduction"
					>
						<Input.TextArea />
					</Form.Item>
					<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

export default HomeNav;
