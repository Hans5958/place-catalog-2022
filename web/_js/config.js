// This script only applies to this instance of the Atlas.
// Please also check code indicated with "@instanceonly" outside this file.
// TODO: Avoid having instance-only code inside the main scripts to make updating easier.

const prodDomain = "hans5958.github.io/place-catalog-2022"
window.prodDomain = prodDomain

const instanceId = "pc"
window.instanceId = instanceId

const instanceSubreddit = "placeAtlas2"
window.instanceSubreddit = instanceSubreddit

const instanceRepo = "https://github.com/Hans5958/place-catalog-2022"
window.instanceRepo = instanceRepo

const pageTitle = "The 2022 r/place Catalog"
window.pageTitle = pageTitle

const canvasSize = {
	x: 2000,
	y: 2000
}
window.canvasSize = canvasSize

const canvasOffset = {
	x: 0,
	y: 0
}
window.canvasOffset = canvasOffset

const canvasCenter = {
	x: canvasSize.x/2 + canvasOffset.x,
	y: canvasSize.y/2 + canvasOffset.y
}
window.canvasCenter = canvasCenter

const variationsConfig = {
	default: {
		name: "r/place",
		code: "",
		default: 164,
		versions: [
			{ "timestamp": 1648818000, "url": ["./_img/canvas/place30ex/start.png"] },
			{ "timestamp": 1648819800, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/000_005.png"] },
			{ "timestamp": 1648821600, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/001_005.png"] },
			{ "timestamp": 1648823400, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/002_005.png"] },
			{ "timestamp": 1648825200, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/003_005.png"] },
			{ "timestamp": 1648827000, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/004_005.png"] },
			{ "timestamp": 1648828800, "url": "./_img/canvas/place30/005.png" },
			{ "timestamp": 1648830600, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/006_005.png"] },
			{ "timestamp": 1648832400, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/007_005.png"] },
			{ "timestamp": 1648834200, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/008_005.png"] },
			{ "timestamp": 1648836000, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/009_005.png"] },
			{ "timestamp": 1648837800, "url": ["./_img/canvas/place30/005.png", "./_img/canvas/place30/010_005.png"] },
			{ "timestamp": 1648839600, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/011_016.png"] },
			{ "timestamp": 1648841400, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/012_016.png"] },
			{ "timestamp": 1648843200, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/013_016.png"] },
			{ "timestamp": 1648845000, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/014_016.png"] },
			{ "timestamp": 1648846800, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/015_016.png"] },
			{ "timestamp": 1648848600, "url": "./_img/canvas/place30/016.png" },
			{ "timestamp": 1648850400, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/017_016.png"] },
			{ "timestamp": 1648852200, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/018_016.png"] },
			{ "timestamp": 1648854000, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/019_016.png"] },
			{ "timestamp": 1648855800, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/020_016.png"] },
			{ "timestamp": 1648857600, "url": ["./_img/canvas/place30/016.png", "./_img/canvas/place30/021_016.png"] },
			{ "timestamp": 1648859400, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/022_027.png"] },
			{ "timestamp": 1648861200, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/023_027.png"] },
			{ "timestamp": 1648863000, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/024_027.png"] },
			{ "timestamp": 1648864800, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/025_027.png"] },
			{ "timestamp": 1648866600, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/026_027.png"] },
			{ "timestamp": 1648868400, "url": "./_img/canvas/place30/027.png" },
			{ "timestamp": 1648870200, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/028_027.png"] },
			{ "timestamp": 1648872000, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/029_027.png"] },
			{ "timestamp": 1648873800, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/030_027.png"] },
			{ "timestamp": 1648875600, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/031_027.png"] },
			{ "timestamp": 1648877400, "url": ["./_img/canvas/place30/027.png", "./_img/canvas/place30/032_027.png"] },
			{ "timestamp": 1648879200, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/033_038.png"] },
			{ "timestamp": 1648881000, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/034_038.png"] },
			{ "timestamp": 1648882800, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/035_038.png"] },
			{ "timestamp": 1648884600, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/036_038.png"] },
			{ "timestamp": 1648886400, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/037_038.png"] },
			{ "timestamp": 1648888200, "url": "./_img/canvas/place30/038.png" },
			{ "timestamp": 1648890000, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/039_038.png"] },
			{ "timestamp": 1648891800, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/040_038.png"] },
			{ "timestamp": 1648893600, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/041_038.png"] },
			{ "timestamp": 1648895400, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/042_038.png"] },
			{ "timestamp": 1648897200, "url": ["./_img/canvas/place30/038.png", "./_img/canvas/place30/043_038.png"] },
			{ "timestamp": 1648899000, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/044_049.png"] },
			{ "timestamp": 1648900800, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/045_049.png"] },
			{ "timestamp": 1648902600, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/046_049.png"] },
			{ "timestamp": 1648904400, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/047_049.png"] },
			{ "timestamp": 1648906200, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/048_049.png"] },
			{ "timestamp": 1648908000, "url": "./_img/canvas/place30/049.png" },
			{ "timestamp": 1648909800, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/050_049.png"] },
			{ "timestamp": 1648911600, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/051_049.png"] },
			{ "timestamp": 1648913400, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/052_049.png"] },
			{ "timestamp": 1648915200, "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/053_049.png"] },
			{ "timestamp": ["First Expansion", 1648917000], "url": ["./_img/canvas/place30/049.png", "./_img/canvas/place30/054_049.png"] },
			{ "timestamp": 1648918800, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/055_060.png"] },
			{ "timestamp": 1648920600, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/056_060.png"] },
			{ "timestamp": 1648922400, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/057_060.png"] },
			{ "timestamp": 1648924200, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/058_060.png"] },
			{ "timestamp": 1648926000, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/059_060.png"] },
			{ "timestamp": 1648927800, "url": "./_img/canvas/place30/060.png" },
			{ "timestamp": 1648929600, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/061_060.png"] },
			{ "timestamp": 1648931400, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/062_060.png"] },
			{ "timestamp": 1648933200, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/063_060.png"] },
			{ "timestamp": 1648935000, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/064_060.png"] },
			{ "timestamp": 1648936800, "url": ["./_img/canvas/place30/060.png", "./_img/canvas/place30/065_060.png"] },
			{ "timestamp": 1648938600, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/066_071.png"] },
			{ "timestamp": 1648940400, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/067_071.png"] },
			{ "timestamp": 1648942200, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/068_071.png"] },
			{ "timestamp": 1648944000, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/069_071.png"] },
			{ "timestamp": 1648945800, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/070_071.png"] },
			{ "timestamp": 1648947600, "url": "./_img/canvas/place30/071.png" },
			{ "timestamp": 1648949400, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/072_071.png"] },
			{ "timestamp": 1648951200, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/073_071.png"] },
			{ "timestamp": 1648953000, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/074_071.png"] },
			{ "timestamp": 1648954800, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/075_071.png"] },
			{ "timestamp": 1648956600, "url": ["./_img/canvas/place30/071.png", "./_img/canvas/place30/076_071.png"] },
			{ "timestamp": 1648958400, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/077_082.png"] },
			{ "timestamp": 1648960200, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/078_082.png"] },
			{ "timestamp": 1648962000, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/079_082.png"] },
			{ "timestamp": 1648963800, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/080_082.png"] },
			{ "timestamp": 1648965600, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/081_082.png"] },
			{ "timestamp": 1648967400, "url": "./_img/canvas/place30/082.png" },
			{ "timestamp": 1648969200, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/083_082.png"] },
			{ "timestamp": 1648971000, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/084_082.png"] },
			{ "timestamp": 1648972800, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/085_082.png"] },
			{ "timestamp": 1648974600, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/086_082.png"] },
			{ "timestamp": 1648976400, "url": ["./_img/canvas/place30/082.png", "./_img/canvas/place30/087_082.png"] },
			{ "timestamp": 1648978200, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/088_093.png"] },
			{ "timestamp": 1648980000, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/089_093.png"] },
			{ "timestamp": 1648981800, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/090_093.png"] },
			{ "timestamp": 1648983600, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/091_093.png"] },
			{ "timestamp": 1648985400, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/092_093.png"] },
			{ "timestamp": 1648987200, "url": "./_img/canvas/place30/093.png" },
			{ "timestamp": 1648989000, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/094_093.png"] },
			{ "timestamp": 1648990800, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/095_093.png"] },
			{ "timestamp": 1648992600, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/096_093.png"] },
			{ "timestamp": 1648994400, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/097_093.png"] },
			{ "timestamp": 1648996200, "url": ["./_img/canvas/place30/093.png", "./_img/canvas/place30/098_093.png"] },
			{ "timestamp": 1648998000, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/099_104.png"] },
			{ "timestamp": 1648999800, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/100_104.png"] },
			{ "timestamp": 1649001600, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/101_104.png"] },
			{ "timestamp": 1649003400, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/102_104.png"] },
			{ "timestamp": 1649005200, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/103_104.png"] },
			{ "timestamp": 1649007000, "url": "./_img/canvas/place30/104.png" },
			{ "timestamp": 1649008800, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/105_104.png"] },
			{ "timestamp": 1649010600, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/106_104.png"] },
			{ "timestamp": 1649012400, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/107_104.png"] },
			{ "timestamp": ["Second Expansion", 1649014200], "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/108_104.png"] },
			{ "timestamp": 1649016000, "url": ["./_img/canvas/place30/104.png", "./_img/canvas/place30/109_104.png"] },
			{ "timestamp": 1649017800, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/110_115.png"] },
			{ "timestamp": 1649019600, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/111_115.png"] },
			{ "timestamp": 1649021400, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/112_115.png"] },
			{ "timestamp": 1649023200, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/113_115.png"] },
			{ "timestamp": 1649025000, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/114_115.png"] },
			{ "timestamp": 1649026800, "url": "./_img/canvas/place30/115.png" },
			{ "timestamp": 1649028600, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/116_115.png"] },
			{ "timestamp": 1649030400, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/117_115.png"] },
			{ "timestamp": 1649032200, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/118_115.png"] },
			{ "timestamp": 1649034000, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/119_115.png"] },
			{ "timestamp": 1649035800, "url": ["./_img/canvas/place30/115.png", "./_img/canvas/place30/120_115.png"] },
			{ "timestamp": 1649037600, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/121_126.png"] },
			{ "timestamp": 1649039400, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/122_126.png"] },
			{ "timestamp": 1649041200, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/123_126.png"] },
			{ "timestamp": 1649043000, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/124_126.png"] },
			{ "timestamp": 1649044800, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/125_126.png"] },
			{ "timestamp": 1649046600, "url": "./_img/canvas/place30/126.png" },
			{ "timestamp": 1649048400, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/127_126.png"] },
			{ "timestamp": 1649050200, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/128_126.png"] },
			{ "timestamp": 1649052000, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/129_126.png"] },
			{ "timestamp": 1649053800, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/130_126.png"] },
			{ "timestamp": 1649055600, "url": ["./_img/canvas/place30/126.png", "./_img/canvas/place30/131_126.png"] },
			{ "timestamp": 1649057400, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/132_137.png"] },
			{ "timestamp": 1649059200, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/133_137.png"] },
			{ "timestamp": 1649061000, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/134_137.png"] },
			{ "timestamp": 1649062800, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/135_137.png"] },
			{ "timestamp": 1649064600, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/136_137.png"] },
			{ "timestamp": 1649066400, "url": "./_img/canvas/place30/137.png" },
			{ "timestamp": 1649068200, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/138_137.png"] },
			{ "timestamp": 1649070000, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/139_137.png"] },
			{ "timestamp": 1649071800, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/140_137.png"] },
			{ "timestamp": 1649073600, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/141_137.png"] },
			{ "timestamp": 1649075400, "url": ["./_img/canvas/place30/137.png", "./_img/canvas/place30/142_137.png"] },
			{ "timestamp": 1649077200, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/143_148.png"] },
			{ "timestamp": 1649079000, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/144_148.png"] },
			{ "timestamp": 1649080800, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/145_148.png"] },
			{ "timestamp": 1649082600, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/146_148.png"] },
			{ "timestamp": 1649084400, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/147_148.png"] },
			{ "timestamp": 1649086200, "url": "./_img/canvas/place30/148.png" },
			{ "timestamp": 1649088000, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/149_148.png"] },
			{ "timestamp": 1649089800, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/150_148.png"] },
			{ "timestamp": 1649091600, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/151_148.png"] },
			{ "timestamp": 1649093400, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/152_148.png"] },
			{ "timestamp": 1649095200, "url": ["./_img/canvas/place30/148.png", "./_img/canvas/place30/153_148.png"] },
			{ "timestamp": 1649097000, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/154_159.png"] },
			{ "timestamp": 1649098800, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/155_159.png"] },
			{ "timestamp": 1649100600, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/156_159.png"] },
			{ "timestamp": 1649102400, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/157_159.png"] },
			{ "timestamp": 1649104200, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/158_159.png"] },
			{ "timestamp": 1649106000, "url": "./_img/canvas/place30/159.png" },
			{ "timestamp": 1649107800, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/160_159.png"] },
			{ "timestamp": 1649109600, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/161_159.png"] },
			{ "timestamp": 1649111400, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/162_159.png"] },
			{ "timestamp": ["Final Canvas", 1649112460], "url": ["./_img/canvas/place30ex/final.png"] },
			{ "timestamp": 1649113200, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/163_159.png"] },
			{ "timestamp": 1649115000, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/164_159.png"] },
			{ "timestamp": 1649116800, "url": ["./_img/canvas/place30/159.png", "./_img/canvas/place30/165_159.png"] },
			{ "timestamp": 1649116967, "url": ["./_img/canvas/place30ex/end.png"] }
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192" aria-hidden="true"><polygon points="154 0 154 38 39 38 39 192 0 192 0 0"/><polygon points="192 38 192 192 77 192 77 153 154 153 154 38"/><rect x="77" y="77" width="38" height="38"/></svg>',
		info: {
			description: `The original r/place canvas in 30-minute increments.

			Some have visited a canvas before.

			A place where togetherness created more.

			Now in numbers far greater, taking more space,

			It falls upon you to create a better place.`,
			links: {
				subreddit: ["place"]
			}
		}
	},
	"#1": {
		name: "The Final Clean"
	},
	tfc: {
		name: "The Final Clean",
		code: "T",
		default: 2,
		versions: [
			{
				timestamp: "Draft 1",
				url: "./_img/canvas/tfc/draft1.png",
			},
			{
				timestamp: "Draft 2",
				url: "./_img/canvas/tfc/draft2.png",
			},
			{
				timestamp: "Final",
				url: "./_img/canvas/tfc/final.png",
			},
			{
				timestamp: "Final (w/ Overlays)",
				url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc/overlay/CHESS.png", "./_img/canvas/tfc/overlay/GAMESTOP.png", "./_img/canvas/tfc/overlay/PROFANITY.png"],
			}
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192"><defs><style>.a{fill-rule:evenodd;}</style></defs><path class="a" d="M69.79,83.55c-.47,.65-.59,1.35-.59,1.35-.26,1.47,.76,2.72,.92,3.12,2.84,7.1,4.49,13.93,3.97,16.39-.47,2.18-5.6,5.65-12.36,8.33-3.63,1.44-6.11,2.99-8.04,5.01-7.17,7.51-10.24,17.86-7.14,24.05,3.93,7.84,18.38,5.86,28.05-3.85,2.09-2.1,3.15-3.83,6.63-10.77,2.97-5.93,4.26-8.05,5.47-8.95,2.04-1.52,9.82,.1,17.41,3.64,1.71,.8,2.31,1.04,2.78,.98,0,0,.22-.05,.43-.14,1.31-.59,17.43-17,25.58-25.34-1.79,.09-3.57,.18-5.36,.28-2.84,2.63-5.68,5.27-8.52,7.9-10.85-10.85-21.7-21.71-32.55-32.56,1.73-1.8,3.46-3.6,5.18-5.4-.29-1.56-.57-3.12-.86-4.69-1.34,1.27-19.42,18.45-21.01,20.66Zm-10.45,44.57c2.5,0,4.53,2.03,4.53,4.53s-2.03,4.53-4.53,4.53-4.53-2.03-4.53-4.53,2.03-4.53,4.53-4.53Z"/><path class="f" d="M132.9,97.36c-.88,.22-7.88,1.92-9.91-1.04-1.11-1.62-1.05-4.71-.52-6.57,.74-2.59,.9-4.06,.25-4.73-.73-.76-2.03-.31-3.73-.18-3.4,.27-8.08-.86-9.6-3.16-2.77-4.21,4.48-13.03,2.31-14.69-.17-.13-.34-.16-.67-.22-4.24-.73-6.79,4.71-11.66,5.1-2.93,.24-6.21-1.39-7.72-4.02-1.11-1.94-1-3.96-.86-4.95h0s7.38-7.39,17.6-17.52c12.75,12.73,25.51,25.47,38.26,38.2l-13.75,13.79Z"/><polygon points="154 0 154 38 39 38 39 192 0 192 0 0"/><polygon points="192 38 192 192 77 192 77 153 154 153 154 38"/></svg>',
		info: {
			description: "Established since the 2017 event, The Final Clean is a collaborative cleanup effort for the final canvas of r/place.",
			links: {
				subreddit: ["TheFinalClean"],
				discord: ["yttybMtH8N"],
				website: ["https://www.reddit.com/r/place/comments/u27cth/communitycleaned_and_repaired_version_of_the/"]
			}
		}
	},
	"tfc-sl": {
		name: "Streamerless",
		code: "TS",
		default: 42,
		versions: [
			{ timestamp: 1649953207, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1649953207923.png"] },
			{ timestamp: 1650037801, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650037801565.png"] },
			{ timestamp: 1650068651, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650068651026.png"] },
			{ timestamp: 1650070350, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650070350104.png"] },
			{ timestamp: 1650076518, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650076518825.png"] },
			{ timestamp: 1650094287, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650094287109.png"] },
			{ timestamp: 1650170801, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650170801601.png"] },
			{ timestamp: 1650173976, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650173976749.png"] },
			{ timestamp: 1650181215, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650181215760.png"] },
			{ timestamp: 1650225370, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650225370813.png"] },
			{ timestamp: 1650231530, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650231530514.png"] },
			{ timestamp: 1650241224, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650241224723.png"] },
			{ timestamp: 1650244993, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650244993631.png"] },
			{ timestamp: 1650251540, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650251540555.png"] },
			{ timestamp: 1650298813, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650298813858.png"] },
			{ timestamp: 1650325182, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650325182895.png"] },
			{ timestamp: 1650338954, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650338954019.png"] },
			{ timestamp: 1650340682, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650340682893.png"] },
			{ timestamp: 1650347756, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650347756724.png"] },
			{ timestamp: 1650348063, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650348063921.png"] },
			{ timestamp: 1650390333, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650390333263.png"] },
			{ timestamp: 1650482702, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650482702832.png"] },
			{ timestamp: 1650523344, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650523344755.png"] },
			{ timestamp: 1650656395, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650656395980.png"] },
			{ timestamp: 1650737631, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650737631184.png"] },
			{ timestamp: 1650739338, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650739338735.png"] },
			{ timestamp: 1650741587, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650741587007.png"] },
			{ timestamp: 1650756543, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650756543586.png"] },
			// WIP OVERLAYS THREAD
			{ timestamp: 1650758783, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650758783360.png"] },
			{ timestamp: 1650839651, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650839651521.png"] },
			{ timestamp: 1650850860, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1650850860680.png"] },
			{ timestamp: 1651044809, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651044809379.png"] },
			{ timestamp: 1651335749, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651335749070.png"] },
			{ timestamp: 1651352117, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651352117027.png"] },
			{ timestamp: 1651353068, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651353068110.png"] },
			{ timestamp: 1651361099, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651361099763.png"] },
			{ timestamp: 1651524866, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651524866522.png"] },
			{ timestamp: 1651525552, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651525552287.png"] },
			{ timestamp: 1651625582, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651625582430.png"] },
			{ timestamp: 1651889221, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651889221094.png"] },
			{ timestamp: 1651893176, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651893176863.png"] },
			// UPDATE
			{ timestamp: 1652314401, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1652314401151.png"] },
			{ timestamp: ["Version 1", 1652583813], url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1652583813669.png"] },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192"><path d="M-.07,0V192H191.93V38h-38V117.2l-28.5,28.8h-29.6l-24.89,25.2v-25.2H38.93V38h115V0H-.07Z"/><path d="M72.56,73.7l-7.64,7.64,7.87,7.87-7.87,7.87,7.64,7.64,7.87-7.87,7.87,7.87,7.63-7.64-7.87-7.87,7.87-7.87-7.63-7.64-7.87,7.87-7.87-7.87Z"/><path d="M137.39,73.7l-7.87,7.87-7.87-7.87-7.63,7.63,7.87,7.87-7.87,7.87,7.64,7.64,7.87-7.87,7.87,7.87,7.64-7.64-7.87-7.87,7.87-7.87-7.64-7.64Z"/></svg>',
		info: {
			description: "The Streamerless sub-project \"aims to remove anything streamer-made that covered community art.\" This development is still ongoing, but version 1 is now available.",
			links: {
				subreddit: ["TheFinalClean"],
				discord: ["yttybMtH8N"]
			}
		}
	},
	"tfc-slp": {
		name: "Streamerless (Purist)",
		code: "TSP",
		default: 3,
		versions: [
			{ timestamp: 1651627050, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651625582430.png", "./_img/canvas/tfc-slp/1651627050710.png"] },
			{ timestamp: 1651638896, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651625582430.png", "./_img/canvas/tfc-slp/1651638896462.png"] },
			{ timestamp: 1651889243, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1651889221094.png", "./_img/canvas/tfc-slp/1651889243135.png"] },
			{ timestamp: 1652358272, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1652314401151.png", "./_img/canvas/tfc-slp/1652358272667.png"] },
			{ timestamp: 1653153523, url: ["./_img/canvas/tfc/final.png", "./_img/canvas/tfc-sl/1652583813669.png", "./_img/canvas/tfc-slp/1653153523529.png"] },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 192 192"><path d="M-.07,0V192H191.93V38h-38V117.2l-28.5,28.8h-29.6l-24.89,25.2v-25.2H38.93V38h115V0H-.07Z"/><path d="M72.56,73.7l-7.64,7.64,7.87,7.87-7.87,7.87,7.64,7.64,7.87-7.87,7.87,7.87,7.63-7.64-7.87-7.87,7.87-7.87-7.63-7.64-7.87,7.87-7.87-7.87Z"/><path d="M137.39,73.7l-7.87,7.87-7.87-7.87-7.63,7.63,7.87,7.87-7.87,7.87,7.64,7.64,7.87-7.87,7.87,7.87,7.64-7.64-7.87-7.87,7.87-7.87-7.64-7.64Z"/></svg>',
		info: {
			description: "The purist form of the Streamerless project, which excludes all streamer-related art (art that is related to streamers, or art that is done with help of streamers). This development is still ongoing.",
			links: {
				subreddit: ["TheFinalClean"],
				discord: ["yttybMtH8N"]
			}
		}
	},
	"tfc-uc": {
		name: "Unofficial Corrections",
		code: "TU",
		default: 6,
		versions: [
			{ timestamp: "Draft 1", url: "./_img/canvas/tfc-uc/1649971703561_TFC_PXcorrections.png" },
			{ timestamp: "Draft 2", url: "./_img/canvas/tfc-uc/1651105992815_unknown.png" },
			{ timestamp: "Draft 3", url: "./_img/canvas/tfc-uc/1651715467538_TFC_PXcorrections_Draft3.png" },
			{ timestamp: "Draft 4", url: "./_img/canvas/tfc-uc/1651804759807_TFC_PXcorrections_Draft4.png" },
			{ timestamp: 1652050001, url: "./_img/canvas/tfc-uc/1652050001062_final_0.png" },
			{ timestamp: 1652140583, url: "./_img/canvas/tfc-uc/1652140583877_final_1.png" },
			{ timestamp: "Final", url: "./_img/canvas/tfc-uc/1652141667878_final_2.png" },
		],
		info: {
			description: "Unofficial Corrections is a post-TFC project that made \"corrections based on existing submissions that went awry, or corrections to corrections that went awry.\"",
			links: {
				subreddit: ["TheFinalClean"],
				discord: ["yttybMtH8N"]
			}
		}
	},
	"#2": {
		name: "Redditor Cuts"
	},
	"cut-scaevolus": {
		name: "Last Averages (u/scaevolus)",
		code: "R1",
		default: 0,
		versions: [
			{ timestamp: "Last Hour Average", url: "./_img/canvas/redditor-cuts/hour-average-scaevolus.png" },
			{ timestamp: "Last 5-Minute Average", url: "./_img/canvas/redditor-cuts/5-min-average-scaevolus.png" }
		],
		info: {
			description: "The \"denoised\" final images made by u/scaevolus. Two versions are offered, one of them is made by request.",
			links: {
				website: [
					"https://www.reddit.com/r/place/comments/tx3w5f/rplace_denoised_final_image_8k/",
					"https://www.reddit.com/r/place/comments/tx3w5f/comment/i3kpvnf/?context=3"
				]
			}
		}
	},
	"cut-davidxga": {
		name: "Last Hour Median (u/DavidXGA)",
		code: "R2",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/redditor-cuts/hour-median-davidxga.png" }
		],
		info: {
			description: "u/DavidXGA \"took median value of every pixel in the last hour\" for this cut of the final canvas.",
			links: {
				website: ["https://www.reddit.com/r/place/comments/tx7q9z/i_took_the_median_value_of_every_pixel_in_the/"]
			}
		}
	},
	"cut-dankrudesandstorm": {
		name: "u/DankRudeSandstorm Cut",
		code: "R3",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/redditor-cuts/dankrudesandstorm-cut.png" }
		],
		info: {
			description: "A manual edit of the final canvas, made by u/DankRudeSandstorm.",
			links: {
				website: ["https://www.reddit.com/r/place/comments/tzigrs/i_removed_stray_pixels_restored_the_artwork_of/"]
			}
		}
	},
	"cut-tiktaalik414": {
		name: "u/Tiktaalik414 Cut",
		code: "R4",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/redditor-cuts/tiktaalik414-cut.png" }
		],
		info: {
			description: `From the author:

			Hoo boy, this was a much bigger task than I had envisioned it. A little over a week ago I started with this post and got a crazy amount of feedback, much more than I had thought I would get. To be dead honest I wasn't sure if I was going to finish it, but the positive feedback I got drove me to buckle down and really hammer this thing out both well and in a timely fashion.

			To make this I pulled from about 5 different version of the canvas, including a version by u/DavidXGA made by taking the median value of all the pixels on the canvas in the final hour, which was a great reference as it helped remove a lot of the noise from the canvas. I also referenced an unfinished version of the canvas edit being made by r/thefinalclean when all other sources failed me, so a big thank you and props to them for their undertaking.

			My philosophy when making this was to try and retain as much originality as possible, as opposed to the thefinalclean team whose goal was more centered on creating the cleanest version of the canvas possible. Any fun little quirks, I wanted to stay in the canvas. That means all the little hidden among us characters, tiny non-invasive pixel arts, and so on. In areas where there was a particularly large amount of chaos going on, my goal was to simply retain the chaos there and clean up as best I can around it, as it wouldn't feel right to make any significant changes to a community project to me.

			I recognize that this project is imperfect, and by the very nature of making something like this, certain arts will have to have been excluded. Unfortunately, that's just how things are, and for anyone whose art didn't make the cut, I'm sorry. I may or may not come back to this post to fix some minor flaws the the future, but don't expect changes if it's only a couple pixels off. If I did make any major mistakes though, sound off in the comments and I'll take note of it.

			Thank you so much everyone for your support in making this! r/place was genuinely the most fun I had on reddit in years and I'm happy to give back to the community. If you like what I've done, all I ask for is an upvote and for you to enjoy whatever use you may find for my cleanup. Thanks again everyone, love you all!`,
			links: {
				website: ["https://www.reddit.com/r/place/comments/u35sth/after_around_40_hours_editing_i_finally_present/"]
			}
		}
	},
	"cut-poisonsnow": {
		name: "u/PoisonSnow Cut",
		code: "R5",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/redditor-cuts/poisonsnow-cut.png" }
		],
		info: {
			description: `From the author:

			Hey all!

			I made this edit of r/Place with the classic void monster, the best version of the French flag, and ugly stremer logos replaced with their original small community artworks.

			It's not a completed version by any means - if anybody has source images for things they want to be added back into place, I still have the upscaled photoshop file.`,
			links: {
				website: ["https://www.reddit.com/r/thefinalclean/comments/twlyly/i_made_a_16000_x_16000_version_of_rplace_that/"]
			}
		}
	},
	"cut-kidkadburgeur": {
		name: "u/kidkadburgeur Cut",
		code: "R6",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/redditor-cuts/kidkadburgeur-cut.png" }
		],
		info: {
			description: `A manual edit of the final canvas, made by u/kidkadburgeur.`,
			links: {
				website: ["https://www.reddit.com/r/thefinalclean/comments/twlyly/i_made_a_16000_x_16000_version_of_rplace_that/"]
			}
		}
	},
	"cut-murgos": {
		name: "Longest Pixel Time (u/Murgos)",
		code: "R7",
		default: 0,
		versions: [
			{ timestamp: "Longest Whole", url: "./_img/canvas/redditor-cuts/whole-longest-murgos.png" },
			{ timestamp: "Longest Last Hour", url: "./_img/canvas/redditor-cuts/last-hour-longest-murgos.png" }
		],
		info: {
			description: `Two versions are offered, one of them is made by request.

			From the author:

			Accumulated the screen time for every color on every pixel location.
The image shows the color which has accumulated the longest screen time up until 2020-04-04 22:47:40.185, which should be more or less the time when only white appeared. There doesn't seem to be a hard cutoff though.`,
			links: {
				website: ["https://www.reddit.com/r/place/comments/tz71el/all_pixels_in_the_color_with_the_longest_screen/", "https://www.reddit.com/r/place/comments/tz71el/comment/i4513e1/?utm_source=share&utm_medium=web2x&context=3"]
			}
		}
	},
	"cut-linuxcde98": {
		name: "Longest Pixel Time (u/LinuxCDE98)",
		code: "R8",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/redditor-cuts/longest-linuxcde98.png" }
		],
		info: {
			links: {
				website: ["https://www.reddit.com/r/place/comments/u081ac/rplace_but_pixels_are_the_color_surving_the/"]
			}
		}
	},
	"#3": {
		name: "Visualizations"
	},
	"viz-alpaca_fur": {
		name: "Whole Average (u/alpaca_fur)",
		code: "V1",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/visualizations/whole-average-alpaca_fur.png" }
		],
		info: {
			description: "The average color of each pixel of the canvas, made by u/alpaca_fur",
			links: {
				website: ["https://www.reddit.com/r/place/comments/tx14va/i_made_an_image_of_the_average_pixel_color_of/"]
			}
		}
	},
	"viz-rwbaker16": {
		name: "Whole Average (u/Rwbaker16)",
		code: "V2",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/visualizations/whole-average-rwbaker16.png" }
		],
		info: {
			description: "The average color of each pixel of the canvas, made by u/wrbaker16",
			links: {
				website: ["https://www.reddit.com/r/dataisbeautiful/comments/ty86cw/average_color_of_each_pixel_in_rplace_oc/"]
			}
		}
	},
	"viz-murgos-1": {
		name: "Whole Average (u/Murgos)",
		code: "V3",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/visualizations/whole-average-murgos.png" }
		],
		info: {
			description: "The average color of each pixel of the canvas, made by u/Murgos",
			links: {
				website: ["https://www.reddit.com/r/place/comments/u02013/rplace_average_color_of_every_pixel_go_canada/"]
			}
		}
	},
	"viz-danielgriffin13": {
		name: "Pixels by Bots (u/danielgriffin13)",
		code: "V4",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/visualizations/bots-danielgriffin13.png" }
		],
		info: {
			description: `From the author:

			The impact of bots on /r/place - users that posted at least every 15 minutes for over 16 hours accounted for 8,634,785 places. This shows the most placed colour by bots at each location.`,
			links: {
				website: ["https://www.reddit.com/r/dataisbeautiful/comments/u1btsb/oc_the_impact_of_bots_on_rplace_users_that_posted/"]
			}
		}
	},
	"viz-officer-zhang": {
		name: "Cooldown-Bypassed Pixels (u/officer-zhang)",
		code: "V5",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/visualizations/bypass-officer-zhang.jpg" }
		],
		info: {
			description: `This variation has been deleted on the original post, but has been recovered. The quality is quite decreased due to the fact that it is a JPEG.

			From the author:

			Data source: official r/place dataset (https://www.reddit.com/r/place/comments/txvk2d/rplace_datasets_april_fools_2022/?utm_source=share&utm_medium=ios_app&utm_name=iossmf)

			Methodology: I looked for instances where a user placed two pixels in under 5min, bypassing the official cooldown. I found a total of 10,994 such events involving 3,128 users. The average cooldown time for these events are 0.012s, with 95% of them under 0.035s.

			Here are these events visualized on the final r/place canvas.`,
			links: {
				website: ["https://www.reddit.com/r/dataisbeautiful/comments/tylnkn/i_found_rplace_cheaters_that_skirted_the_5_min/"]
			}
		}
	},
	"viz-eyusd": {
		name: "Heatmap (u/Eyusd)",
		code: "V6",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/visualizations/heatmap-eyusd.png" }
		],
		info: {
			description: `The canvas has been scaled to 2000x2000 with the bilinear algorithm.

			From the author:

			This is pretty straigthforward : whenever a pixel is changed bewteen two snapshots available on rplace.space, the heatmap becomes more red.

			This took an hour to render, using a small python script

			Also, I've just seen on the front page that a similar post has been added to r/place If you're wondering why both are relevant : 1- I should check the front page more often, and I wanted to post this image I find pretty 2- The post on r/place recalibrated the weight of each pixel based on the time it was active, therefore 1h on the bottom region has the same weight as 3h on the top left one. I found it a bit biased, and wanted to be able to compare the sheer scale of the final battles, or the length of the fight for the Canadian leaf`,
			links: {
				website: ["https://www.reddit.com/r/dataisbeautiful/comments/twulb1/oc_heatmap_of_rplace_start_to_end/"]
			}
		}
	},
	"viz-lornedon": {
		name: "Pixels by Age (u/Lornedon)",
		code: "V7",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/visualizations/age-lornedon.png" }
		],
		info: {
			description: "From the author: The age of each pixel on the final canvas of /r/place. Darker pixels are older.",
			links: {
				website: ["https://www.reddit.com/r/dataisbeautiful/comments/tzi1j0/oc_the_age_of_each_pixel_on_the_final_canvas_of/"]
			}
		}
	},
	"viz-always-white-?": {
		name: "Always White Pixels (?)",
		code: "V8",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/visualizations/always-white.png" }
		],
		info: {
			description: "The image is obtained from a post, which itself linked a Discord attachment. If you know who made this variation specifically, please tell me.",
			links: {
				website: ["https://www.reddit.com/r/place/comments/tyjn6v/longest_living_pixel/"]
			}
		}
	},
	"viz-always-white-paultron10110": {
		name: "Always White Pixels (u/paultron10110)",
		code: "V8",
		default: 0,
		versions: [
			{ timestamp: "", url: "./_img/canvas/visualizations/always-white-paultron10110.png" }
		],
		info: {
			description: `From the author:

			Made with Python, Pandas, and JupyterLab.

			I was making a heat map of the data and I discovered there were pixels that had never been placed, thus remained white the whole time. I had to re-download the data to confirm I hadn't messed it up somewhere but sure enough, there are quite a few places that were never.... placed.

			Pixels that have zero places have been colored red over the desaturated final image.`,
			links: {
				website: ["https://www.reddit.com/r/dataisbeautiful/comments/uhz68b/lonely_rplace_pixels_that_were_never_placed/"]
			}
		}
	},
}
window.variationsConfig = variationsConfig

let defaultVariation = 'default'
window.defaultVariation = defaultVariation

let defaultPeriod = variationsConfig[defaultVariation].default
window.defaultPeriod = defaultPeriod

const useNumericalId = false
window.useNumericalId = useNumericalId

console.info(`%cThe 2022 r/place Catalog
%cCopyright (c) 2017 Roland Rytz <roland@draemm.li>
Copyright (c) 2022 Place Atlas contributors
Copyright (c) 2022 Hans5958
Licensed under AGPL-3.0 (https://hans5958.github.io/place-catalog-2022/license.txt)

To get the image of the canvas, use downloadCanvas().
`, 'font-size: 150%; line-height: 150%', '')