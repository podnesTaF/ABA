import {Hero} from "@/models/shared/hero";
import {List} from "@/models/shared/list";

export type Roadmap = {
	id: number;
	hero: Hero;
	milestones: List[]
}