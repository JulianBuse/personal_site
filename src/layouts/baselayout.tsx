import React from "react";
import {Helmet} from "react-helmet";

interface BaselayoutProps {
	children: React.ReactNode;
	title: string;
}

export const BaseLayout: React.FC<BaselayoutProps> = ({children, title}) => {
	return <div className="min-h-[100dvh] bg-black text-neutral-200">
		<Helmet>
			<title>{title}</title>
		</Helmet>
		{children}
	</div>
}
