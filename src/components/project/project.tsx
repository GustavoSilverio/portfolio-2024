import { ProjectProps } from "@/types/components/project"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip"

export const Project = ({
	name,
	description,
	externalLink,
	githubRepo,
	imageUrl,
}: ProjectProps) => {
	return (
		<Card className="shadow-base flex flex-col justify-between px-4 py-3 rounded-[8px] bg-slate-900 max-w-[324px] w-full min-h-[324px] max-h-[324px]">
			<CardHeader className="p-0">
				<TooltipProvider>
					<Tooltip
						disableHoverableContent
						delayDuration={0}
					>
						<TooltipTrigger asChild>
							<CardTitle className="truncate">{name}</CardTitle>
						</TooltipTrigger>
						<TooltipContent side="bottom">{name}</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<TooltipProvider>
					<Tooltip
						disableHoverableContent
						delayDuration={0}
					>
						<TooltipTrigger asChild>
							<CardDescription
								className={cn({
									"line-clamp-3": externalLink || githubRepo,
									"line-clamp-5":
										!externalLink && !githubRepo,
								})}
							>
								{description}
							</CardDescription>
						</TooltipTrigger>
						<TooltipContent side="bottom">
							{description}
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</CardHeader>
			<div className="flex flex-col gap-3">
				<CardContent className="p-0">
					<Image
						src={imageUrl}
						width={292}
						height={142}
						alt="Project image"
						className="w-full h-auto rounded-md"
						quality={100}
						priority
					/>
				</CardContent>
				<CardFooter
					className={cn("flex gap-4 p-0", {
						hidden: !externalLink && !githubRepo,
					})}
				>
					<a
						href={externalLink}
						rel="noreferrer"
						target="_blank"
						className={cn(
							"flex justify-center transition ease-in-out duration-300 rounded-[6px] bg-slate-300 hover:bg-slate-50 w-full px-6 py-[6px]",
							{
								hidden: !externalLink,
							}
						)}
					>
						<ExternalLink color="#020617" />
					</a>

					<a
						href={githubRepo}
						rel="noreferrer"
						target="_blank"
						className={cn(
							"flex justify-center transition ease-in-out duration-300 rounded-[6px] bg-[#0D1117] hover:bg-[#050608] w-full px-6 py-[6px]",
							{
								hidden: !githubRepo,
							}
						)}
					>
						<Github color="#F1F5F9" />
					</a>
				</CardFooter>
			</div>
		</Card>
	)
}
