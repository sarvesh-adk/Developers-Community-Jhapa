import React from 'react';
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';

interface ModalProps {
  executive: {
    name: string;
    role: string;
    image: string;
    bio: string;
    social: {
      linkedin?: string;
      twitter?: string;
      facebook?: string;
      [key: string]: string | undefined;
    };
  };
  closeModal: () => void;
}

export function Modal({ executive, closeModal }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
        <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
          <Avatar src={executive.image} sx={{ '--Avatar-size': '4rem' }} />
          <Chip
            size="sm"
            variant="soft"
            color="primary"
            sx={{
              mt: -1,
              mb: 1,
              border: '3px solid',
              borderColor: 'background.surface',
            }}
          >
            {executive.role}
          </Chip>
          <Typography level="title-lg">{executive.name}</Typography>
          <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
            {executive.bio}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              mt: 2,
              '& > button': { borderRadius: '2rem' },
            }}
          >
            {executive.social.github && (
              <motion.a
                href={executive.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#575757] hover:text-[#1f1f1f]"
                whileHover={{ scale: 1.1 }}
              >
                <Github size={18} />
              </motion.a>
            )}
            {executive.social.linkedin && (
              <motion.a
                href={executive.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#575757] hover:text-[#1f1f1f]"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin size={18} />
              </motion.a>
            )}
            {executive.social.twitter && (
              <motion.a
                href={executive.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#575757] hover:text-[#1f1f1f]"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter size={18} />
              </motion.a>
            )}
          </Box>
        </CardContent>
        <CardOverflow sx={{ bgcolor: 'background.level1' }}>
          <CardActions buttonFlex="1">
            <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
              <Button onClick={closeModal}>Close</Button>
            </ButtonGroup>
          </CardActions>
        </CardOverflow>
      </Card>
    </div>
  );
}

export default Modal;
