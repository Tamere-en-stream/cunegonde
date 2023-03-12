<script lang="ts">
	import { codeToRatios } from '$lib/codeToRatios';
	import { GertrudeInstructions, isRatio, isValidRatio, isVarName, type Ratio } from '$lib/GertrudeInstruction';
	import { CodeBlock } from '@skeletonlabs/skeleton';

	let input = '';
	let instructions: string = '';

    let getInstruction = (ratio: string | null) => {
        if (!ratio)
            return '\n'
        if (!isRatio(ratio))
            return '\n'
        if (isValidRatio(ratio))
            return GertrudeInstructions[ratio];
        if (isVarName(ratio))
            return `var ${ratio.split('/')[1]}`
        return `const ${ratio.split('/')[1]}/${ratio.split('/')[0]}`
    }

	$: instructions = codeToRatios(input).map((ratio) => getInstruction(ratio)).join('\n');
</script>

<div class="flex flex-col items-center justify-center min-h-screen">
	<aside class="w-full flex items-center justify-start p-4">
		<h1>Cunégonde</h1>
	</aside>
	<main class="w-full h-full flex-grow flex flex-col items-center jusify-center p-12 gap-12">
		<div class="w-full h-fit grid grid-cols-2 gap-8">
			<textarea
				class="textarea p-4"
				rows="20"
				placeholder="Your .Gertrude program"
				bind:value={input}
			/>
			<CodeBlock
				class="border-surface-400-500-token flex-grow h-full"
				language=".Gertrude instructions"
				code={instructions || 'Type a program to see the output'}
			/>
		</div>
		<button class="btn btn-lg variant-filled-surface"> Run </button>
	</main>
</div>
