import './App.css';
import { Button, Card, Col, Divider, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Title from 'antd/lib/typography/Title';
import { useState } from 'react';

const buttons = [
	['AC', 'res', '%', '/'],
	[7, 8, 9, 'X'],
	[4, 5, 6, '-'],
	[1, 2, 3, '+'],
	[0, '.', '='],
].flat();

function App() {
	const [screen, setScreen] = useState('0');
	const [result, setResult] = useState(0);
	
	const changeScreenValue = (buttonType) => {
		if (screen.length < 15) {
			setScreen(screen + buttonType);
		}
	};
	
	const changeResult = (number) => {
		setResult(result + number);
	}
	
	const onClick = (buttonType) => {
		switch (buttonType) {
			case 'AC':
				setScreen('0');
				setResult(0);
				break;
			case 'res':
				setScreen(screen.slice(0, -1));
				break;
			case '%':
				setScreen();
				break;
			case '.':
				changeScreenValue(buttonType);
				break;
			default:
				changeScreenValue(buttonType);
		}
	};
	
	return (
		<div className="App">
			<Layout>
				<Content>
					<div className="wrapper">
						<Card>
							<Row justify="end">
								<Title level={2}>{screen.length > 1 ? screen.slice(1) : screen}</Title>
							</Row>
							<Row justify="end">
								<Title level={3}>{result ? `=${result}` : ''}</Title>
							</Row>
							<Divider/>
							<Row gutter={[16, 16]} justify="end">
								{buttons.map(button => (
									<Col key={button} span={6}>
										<Button
											block
											type="primary"
											shape="circle"
											size="large"
											value={button}
											onClick={() => onClick(button)}
											style={{ height: '61.25px' }}
										>
											<span></span>
											{button}
										</Button>
									</Col>
								))}
							</Row>
						</Card>
					</div>
				</Content>
			</Layout>
		</div>
	);
}

export default App;