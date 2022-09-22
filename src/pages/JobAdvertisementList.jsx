import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Table, Icon, Menu, Button } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { addToSaved } from '../store/actions/saveActions'

export default function JobAdvertisementList() {

    const dispatch = useDispatch()

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getAllJobAdvertisements().then(result => setJobAdvertisements(result.data.data))

    }, [])

    const handleAddToSaved = (jobAdvertisement) => {
        dispatch(addToSaved(jobAdvertisement))
    }

    return (
        <div>
            <Table celled inverted selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Job Position</Table.HeaderCell>
                        <Table.HeaderCell>Job Description</Table.HeaderCell>
                        <Table.HeaderCell>Open Position Count</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Employer</Table.HeaderCell>
                        <Table.HeaderCell>Release Date</Table.HeaderCell>
                        <Table.HeaderCell>Application Deadline</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisements.map(jobAdvertisement => (
                            <Table.Row key={jobAdvertisement.id}>
                                <Table.Cell>{jobAdvertisement.jobPosition}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.openPositionCount}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
                                <Table.Cell><Button onClick={() => handleAddToSaved(jobAdvertisement)}>Kaydet</Button></Table.Cell>

                            </Table.Row>
                        ))
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
