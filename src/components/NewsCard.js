import React from "react"
import { Card, CardHeader, CardContent, CardActions, Button, Typography } from "@mui/material"
import { Link } from "gatsby"

const NewsCard = ({ title, date, excerpt, slug }) => (
    <Card sx={{ height: 380 }}>
        <CardHeader
            title={title}
            subheader={date}
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {excerpt}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <Button component={Link} to={slug} size="small">Read More</Button>
        </CardActions>
    </Card>
)

export default NewsCard