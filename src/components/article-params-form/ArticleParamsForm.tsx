import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { Select } from 'src/ui/select';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

type ArticleParamsFormProps = {
	articleState: ArticleStateType;
	setArticleState: (state: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	articleState,
	setArticleState,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [formState, setFormState] = useState<ArticleStateType>(articleState);
	const sidebarRef = useRef<HTMLElement>(null);
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (!sidebarRef.current?.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClick);

		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, []);

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<aside
				className={`
					${styles.container}
					${isOpen ? styles.container_open : ''}`}
				ref={sidebarRef}>
				<form
					className={styles.form}
					onSubmit={(e) => {
						e.preventDefault();
						setArticleState(formState);
					}}>
					<h1 className={styles.formTitle}>ЗАДАЙТЕ ПАРАМЕТРЫ</h1>
					<Select
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(option) => {
							setFormState((prev) => ({
								...prev,
								fontFamilyOption: option,
							}));
						}}
						title='шрифт'></Select>
					<RadioGroup
						name='fontSize'
						selected={formState.fontSizeOption}
						options={fontSizeOptions}
						onChange={(option) => {
							setFormState((prev) => ({
								...prev,
								fontSizeOption: option,
							}));
						}}
						title='размер шрифта'></RadioGroup>
					<Select
						selected={formState.fontColor}
						options={fontColors}
						onChange={(option) => {
							setFormState((prev) => ({
								...prev,
								fontColor: option,
							}));
						}}
						title='цвет шрифта'></Select>
					<Separator></Separator>
					<Select
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={(option) => {
							setFormState((prev) => ({
								...prev,
								backgroundColor: option,
							}));
						}}
						title='цвет фона'></Select>
					<Select
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={(option) => {
							setFormState((prev) => ({
								...prev,
								contentWidth: option,
							}));
						}}
						title='ширина контента'></Select>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={() => {
								setArticleState(defaultArticleState);
								setFormState(defaultArticleState);
							}}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
