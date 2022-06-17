<script lang="ts">
  import {container} from './Block.css'
  import clsx from 'clsx'

  export let className
</script>

<section class={clsx(container, className)}>
  <slot />
</section>
