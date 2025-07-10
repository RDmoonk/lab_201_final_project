// import * as React from "react"
// import * as RechartsPrimitive from "recharts"

// import { cn } from "@/lib/utils"

// // Format: { THEME_NAME: CSS_SELECTOR }
// const THEMES = { light: "", dark: ".dark" } as const

// export type ChartConfig = {
//   [key: string]: {
//     label?: React.ReactNode
//     icon?: React.ComponentType
//   } & (
//     | { color?: string; theme?: never }
//     | { color?: never; theme: Record<keyof typeof THEMES, string> }
//   )
// }

// type ChartContextProps = {
//   config: ChartConfig
// }

// const ChartContext = React.createContext<ChartContextProps | null>(null)

// function useChart() {
//   const context = React.useContext(ChartContext)
//   if (!context) {
//     throw new Error("useChart must be used within a <ChartContainer />")
//   }
//   return context
// }

// function ChartContainer({
//   id,
//   className,
//   children,
//   config,
//   ...props
// }: React.ComponentProps<"div"> & {
//   config: ChartConfig
//   children: React.ReactNode
// }) {
//   const uniqueId = React.useId()
//   const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

//   return (
//     <ChartContext.Provider value={{ config }}>
//       <div
//         data-slot="chart"
//         data-chart={chartId}
//         className={cn(
//           "flex aspect-video justify-center text-xs",
//           "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
//           "[&_.recharts-cartesian-grid_line]:stroke-border/50",
//           "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border",
//           "[&_.recharts-polar-grid_]:stroke-border",
//           "[&_.recharts-radial-bar-background-sector]:fill-muted",
//           "[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted",
//           "[&_.recharts-reference-line_]:stroke-border",
//           "[&_.recharts-dot]:stroke-transparent",
//           "[&_.recharts-layer]:outline-none",
//           "[&_.recharts-sector]:outline-none",
//           "[&_.recharts-sector[stroke='#fff']]:stroke-transparent",
//           "[&_.recharts-surface]:outline-none",
//           className
//         )}
//         {...props}
//       >
//         <ChartStyle id={chartId} config={config} />
//         <RechartsPrimitive.ResponsiveContainer>
//           {children}
//         </RechartsPrimitive.ResponsiveContainer>
//       </div>
//     </ChartContext.Provider>
//   )
// }

// function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
//   const colorConfig = Object.entries(config).filter(
//     ([, item]) => item.theme || item.color
//   )

//   if (!colorConfig.length) return null

//   const styleString = Object.entries(THEMES)
//     .map(([theme, prefix]) => {
//       const rules = colorConfig
//         .map(([key, item]) => {
//           const color = item.theme?.[theme as keyof typeof item.theme] || item.color
//           return color ? `  --color-${key}: ${color};` : null
//         })
//         .filter(Boolean)
//         .join("\n")

//       return `${prefix} [data-chart='${id}'] {\n${rules}\n}`
//     })
//     .join("\n")

//   return <style dangerouslySetInnerHTML={{ __html: styleString }} />
// }

// const ChartTooltip = RechartsPrimitive.Tooltip

// function ChartTooltipContent({
//   active,
//   payload,
//   className,
//   indicator = "dot",
//   hideLabel = false,
//   hideIndicator = false,
//   label,
//   labelFormatter,
//   labelClassName,
//   formatter,
//   color,
//   nameKey,
//   labelKey,
// }: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
//   React.ComponentProps<"div"> & {
//     hideLabel?: boolean
//     hideIndicator?: boolean
//     indicator?: "line" | "dot" | "dashed"
//     nameKey?: string
//     labelKey?: string
//   }) {
//   const { config } = useChart()

//   const tooltipLabel = React.useMemo(() => {
//     if (hideLabel || !payload?.length) return null

//     const item = payload[0]
//     const key = `${labelKey || item?.dataKey || item?.name || "value"}`
//     const itemConfig = getPayloadConfigFromPayload(config, item, key)

//     const value =
//       !labelKey && typeof label === "string"
//         ? config[label as keyof ChartConfig]?.label || label
//         : itemConfig?.label

//     if (labelFormatter) {
//       return (
//         <div className={cn("font-medium", labelClassName)}>
//           {labelFormatter(value, payload)}
//         </div>
//       )
//     }

//     return value ? <div className={cn("font-medium", labelClassName)}>{value}</div> : null
//   }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey])

//   if (!active || !payload?.length) return null

//   const nestLabel = payload.length === 1 && indicator !== "dot"

//   return (
//     <div
//       className={cn(
//         "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
//         className
//       )}
//     >
//       {!nestLabel && tooltipLabel}
//       <div className="grid gap-1.5">
//         {payload.map((item, index) => {
//           const key = `${nameKey || item.name || item.dataKey || "value"}`
//           const itemConfig = getPayloadConfigFromPayload(config, item, key)
//           const indicatorColor = color || item.payload?.fill || item.color

//           return (
//             <div
//               key={item.dataKey}
//               className={cn(
//                 "flex w-full flex-wrap items-stretch gap-2",
//                 "[&>svg]:text-muted-foreground [&>svg]:h-2.5 [&>svg]:w-2.5",
//                 indicator === "dot" && "items-center"
//               )}
//             >
//               {formatter && item?.value !== undefined && item.name ? (
//                 formatter(item.value, item.name, item, index, item.payload)
//               ) : (
//                 <>
//                   {!hideIndicator && (
//                     itemConfig?.icon ? (
//                       <itemConfig.icon />
//                     ) : (
//                       <div
//                         className={cn(
//                           "shrink-0 rounded-[2px]",
//                           {
//                             "h-2.5 w-2.5": indicator === "dot",
//                             "w-1": indicator === "line",
//                             "w-0 border-[1.5px] border-dashed bg-transparent":
//                               indicator === "dashed",
//                             "my-0.5": nestLabel && indicator === "dashed",
//                           }
//                         )}
//                         style={{
//                           backgroundColor: indicatorColor,
//                           borderColor: indicatorColor,
//                         }}
//                       />
//                     )
//                   )}
//                   <div
//                     className={cn(
//                       "flex flex-1 justify-between leading-none",
//                       nestLabel ? "items-end" : "items-center"
//                     )}
//                   >
//                     <div className="grid gap-1.5">
//                       {nestLabel && tooltipLabel}
//                       <span className="text-muted-foreground">
//                         {itemConfig?.label || item.name}
//                       </span>
//                     </div>
//                     {item.value !== undefined && (
//                       <span className="font-mono font-medium tabular-nums text-foreground">
//                         {item.value.toLocaleString()}
//                       </span>
//                     )}
//                   </div>
//                 </>
//               )}
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// const ChartLegend = RechartsPrimitive.Legend

// function ChartLegendContent({
//   className,
//   hideIcon = false,
//   payload,
//   verticalAlign = "bottom",
//   nameKey,
// }: React.ComponentProps<"div"> &
//   Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
//     hideIcon?: boolean
//     nameKey?: string
//   }) {
//   const { config } = useChart()

//   if (!payload?.length) return null

//   return (
//     <div
//       className={cn(
//         "flex items-center justify-center gap-4",
//         verticalAlign === "top" ? "pb-3" : "pt-3",
//         className
//       )}
//     >
//       {payload.map((item) => {
//         const key = `${nameKey || item.dataKey || "value"}`
//         const itemConfig = getPayloadConfigFromPayload(config, item, key)

//         return (
//           <div
//             key={item.value}
//             className="flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
//           >
//             {!hideIcon && (
//               itemConfig?.icon ? (
//                 <itemConfig.icon />
//               ) : (
//                 <div
//                   className="h-2 w-2 shrink-0 rounded-[2px]"
//                   style={{ backgroundColor: item.color }}
//                 />
//               )
//             )}
//             {itemConfig?.label}
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// // Helper to extract config from payload
// function getPayloadConfigFromPayload(
//   config: ChartConfig,
//   payload: any,
//   key: string
// ) {
//   if (!payload || typeof payload !== "object") return undefined

//   const payloadData = payload.payload || {}
//   let configKey = key

//   if (typeof payload[key] === "string") {
//     configKey = payload[key]
//   } else if (typeof payloadData[key] === "string") {
//     configKey = payloadData[key]
//   }

//   return config[configKey] || config[key]
// }

// export {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
//   ChartLegend,
//   ChartLegendContent,
//   ChartStyle,
// }
