import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import fonts from '../../fonts/font.scss';
import { useState } from 'react';
import { Select } from 'src/ui/select';
import { backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions, OptionType } from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedFont, setSelectedFont] = useState(defaultArticleState.fontFamilyOption);
	const [selectedFontSize, setSelectedFontSize] = useState(defaultArticleState.fontSizeOption);
	const [selectedFontColor, setSelectedFontColor] = useState(defaultArticleState.fontColor);
	const [selectedBackgroundColors, setSelectedBackgroundColors] = useState(defaultArticleState.backgroundColor);
	const [сontentWidth, setСontentWidth] = useState(defaultArticleState.contentWidth);

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<aside
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form className={styles.form}>
					<h1 className={styles.formTitle}>ЗАДАЙТЕ ПАРАМЕТРЫ</h1>
					<Select 
					selected={selectedFont} 
					options={fontFamilyOptions}
					onChange={setSelectedFont}
					title='шрифт'
					>
					</Select>
					<RadioGroup
					name=''
					options={fontSizeOptions}
					selected={selectedFontSize}
					onChange={setSelectedFontSize}
					title='размер шрифта'
					>
					</RadioGroup>
					<Select 
					selected={selectedFontColor} 
					options={fontColors}
					onChange={setSelectedFontColor}
					title='цвет шрифта'
					>
					</Select>
					<Separator></Separator>
					<Select 
					selected={selectedBackgroundColors} 
					options={backgroundColors}
					onChange={setSelectedBackgroundColors}
					title='цвет фона'
					>
					</Select>
					<Select 
					selected={сontentWidth} 
					options={contentWidthArr}
					onChange={setСontentWidth}
					title='ширина контента'
					>
					</Select>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
