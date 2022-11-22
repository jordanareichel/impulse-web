import React, { useState } from 'react';

import { Form } from '@components/Form';
import { Icons } from '@components/Icons';
import { Text } from '@components/Text';
import { Widget } from '@components/Widget';

import { Card, Feedback } from './styled';
import { FeedbackProps } from './types';

const feedbackTypes = [
	{ type: FeedbackProps.problema, title: 'Problema', image: 'bug' },
	{ type: FeedbackProps.ideia, title: 'Ideia', image: 'idea' },
	{ type: FeedbackProps.outro, title: 'Outros', image: 'other' },
];

const Home = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [feedbackType, setFeedbackType] = useState<FeedbackProps>(
		FeedbackProps.feedback,
	);

	function handleOpenWidget() {
		setFeedbackType(FeedbackProps.feedback);
		setOpen(prevValue => !prevValue);
	}

	return (
		<Widget onClick={handleOpenWidget}>
			{open && (
				<Form
					onClick={handleOpenWidget}
					title="Deixe seu Feedback"
					icon={feedbackType !== FeedbackProps.feedback ? 'arrow-left' : ''}>
					{feedbackType === FeedbackProps.feedback ? (
						<Card>
							{feedbackTypes.map((item, index) => (
								<Feedback
									key={index}
									onClick={() => setFeedbackType(item.type)}
									shape="bordered">
									<Icons name={item.image} />
									<Text size="sm" color="white">
										{item.title}
									</Text>
								</Feedback>
							))}
						</Card>
					) : (
						<p>{feedbackType}</p>
					)}
				</Form>
			)}
		</Widget>
	);
};

export default Home;
