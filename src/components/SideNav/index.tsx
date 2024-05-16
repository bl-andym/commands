import { NavProps, Category } from '../../app/types'

import { Box } from '@mui/material'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'
import Fade from '@mui/material/Fade'

// material ui
// either grid, box. or stack

export default function SideNav({ data }: NavProps) {
    return (
        <Box component="section" sx={{
            p: 2,
            border: '1px solid grey',
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 1,
            height: 'auto',
            minHeight: '100vh',
        }}>
            {data.map((category: Category) => (
                <div key={category.id}>
                    <Accordion defaultExpanded={category.id === 0}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            key={category.id}>
                            <h3>{category.name}</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {category.commands.map(command => (
                                    <div key={command.name}>
                                        {command.name}
                                    </div>
                                ))}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            ))
            }
        </Box>
    )
}
